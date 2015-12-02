'use strict'

window.onload = function(){

console.log ('app.js');

// this code is must be revised

    let $windows = $('#about,#code-samples,#projects,#contact');
    let $buttons = $('#nav-about,#nav-code-samples,#nav-projects, #nav-contact');

    $('#about').show();

    $buttons.on('click', function(e){
        var $id;

        let $divid = $('#' + this.id.substring(4));

    if(!$divid.is(':visible') ) {
        $windows.slideUp();
        $divid.slideDown();

    }
        });

}
