/**
 * Test JavaScript
 */
global.jQuery = require('jquery');
bootstrap = require('bootstrap');
mustache = require('mustache');

jQuery(function($){
    // Scrollspy
    function scrollToTarget(target) {

        // Make sure this.hash has a value before overriding default behavior
        if (target.hash !== "") {

            // Store hash
            var hash = target.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if
    }

    // Init carousel
    $("#myCarousel").carousel();

    // Init scrollspy to <body>
    $('body').scrollspy({target: "#top", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#foot-target").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        scrollToTarget(this);
    });


   /* var jqxhr = $.getJSON('data.json', function(){

    }).done(function(data){
       var template = $('#template').html();
       var showTemplate = mustache.render(template, data);
       $('#gallery').html(showTemplate);
    });*/
});
