'use strict'

$(function(){
  //Get the form
  var form = ('#ajax-contact');

  //Get the message div
  var formMessages = $('#form-messages');

  // Set up an event listener for the contact form
  $(form).submit(function(event) {
    /* Stop the browser from submiting the form */
    event.preventDefault();
    //Check if it works
    console.log('Default prevented.');

    //Serialize the form date
    var formData = $(form).serialize();

    //Submit the form via ajax
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    }).done(function(response){
      //Make sure that the formMessage div has the success class
      $(formMessages).removeClass('alert-danger').show();
      $(formMessages).addClass('alert-success').show();

      //Set the message text
      $(formMessages).text(response);

      //Clear the form
      $('#name').val('');
      $('#email').val('');
      $('#phone').val('');
      $('#message').val('');
    }).fail(function(data){
      //Make sure the form Messages div has the 'error' class.
      $(formMessages).removeClass('alert-success').show();
      $(formMessages).addClass('alert-danger').show(); 

      //Set the message text
      if (data.responseText !==('')) {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).append('<p>Oops! There has been an error and your message could not be sent.</p>')
      }
    });


  });

});
