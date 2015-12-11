'use strict'

window.onload = function(){

console.log ('app.js');


// this code is must be revised

    var $windows = $('#about,#code-samples,#projects,#contact');
    var $buttons = $('#nav-about,#nav-code-samples,#nav-projects, #nav-contact');

    $('#about').show();

    $buttons.on('click', function(e){
        var $id;

        var $divid = $('#' + this.id.substring(4));

    if(!$divid.is(':visible') ) {
        $windows.slideUp();
        $divid.slideDown();

    }
        });

}
