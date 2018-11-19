'use strict';
/*
* Novicell master
* Use this file to call functions in other files, on document ready, window.resize etc.
*/

var novicell = novicell || {};
var projectName = projectName || {};

// Document ready
document.addEventListener('DOMContentLoaded', function(){
    novicell.pageheaderDots.init();

    //SetTimeout to fix latency with loaded elements in e.g. Vue components
    setTimeout(() => {
        svg4everybody(); // Fix SVG spritemap in IE/Edge
    });
    console.log('it works!');
});
