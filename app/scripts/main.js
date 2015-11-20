console.log('Hello gulp-livereload!');


window.onload = function(){

console.log ('app.js');

// this code is bullshit

    var $windows = $('#about,#code-samples,#projects');
    var $buttons = $('#nav-about,#nav-code-samples,#nav-projects');

    $('#about').show();

    $buttons.on('click', function(e){
        var $id;

        $divid = $('#' + this.id.substring(4));

    if(!$divid.is(':visible') ) {
        $windows.slideUp();
        $divid.slideDown();

    }
        });

}
