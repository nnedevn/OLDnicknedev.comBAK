<?php
// ini_set('display_errors', 'On');
// // ini_set('html_errors', '1');
// error_reporting(E_ALL | E_STRICT);

//Only process POST requiests
if ($_SERVER["REQUEST_METHOD"]=="POST") {
  //Get the form fields and remove the white spaces
	$name = prepare($_POST["name"]);
	$email = filter_var(prepare($_POST["email"]), FILTER_SANITIZE_EMAIL);
	$phone = prepare($_POST["phone"]);
	$message = prepare($_POST["message"]);

// Check if the data was sent to the mailer
	if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)){
		//Set a bad request (400) response code and exit.
		http_response_code(400);
		echo "Oops! There has been an issue.";
		exit;
	}

	//Set the recipient email address
	$recipient = 'nnedev01@seattlecentral.edu';
	//Set the subject
	$subject = "nicknedev.com> email from $name";

	//Build the email content
	$email_content = "Name: $name\n";
	$email_content .="Email: $email\n";
	$email_content .="Phone: $phone\n";
	$email_content .="Message : $message\n";

	//Build the email header
	$email_header = "From $name <$email>";

	// Send the mail
	if (mail($recipient, $subject, $email_content, $email_header)){
		// Set 200 (cool) response
		http_response_code(200);
		echo("The message is on its way.");

	} else {
		//Set internal server error (500)
		http_response_code(500);
		echo ("Something went wrong but it is not your fault. ");
	}

} else {
	// This is not a POST request, set a 403
	http_response_code(403);
	echo "There has been an issue with your submission. Please try again.";
}

function prepare($data){
  return strip_tags(trim($data));
}

 ?>
