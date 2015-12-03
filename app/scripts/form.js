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
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      //Set the message text
      $(formMessages).text(response);

      //Clear the form
      $('#name').val('');
      $('#email').val('');
      $('#phone').val('');
      $('#message').val('');
    }).fail(function(data){
      //Make sure the form Messages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      //Set the message text
      if (data.responseText !==('')) {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! There has been an error any your message could not be sent.')
      }
    });


  });

});
