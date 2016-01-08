'use strict'

$(document).ready(function () {

  $('#about').show();

  var buttons = $('.button');
  var contentDivs = $('.site-content');

  if (buttons !== null) {

    buttons.each(
        function (iCopy) {

          buttons[iCopy].addEventListener('click', function () {
            'use strict'

            var divId = $('#' + this.id.substr(4));

            if (!divId.is(':visible')) {
              contentDivs.slideUp();
              divId.slideDown();
            }
          });
        }
    );
  }
});
