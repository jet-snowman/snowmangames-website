$(document).ready(function(){
    "use strict";
    
    // NAVBAR RESIZE FUNCTION
    $(window).scroll( function() {
        var value = $(this).scrollTop();
        if ( value > $(window).height() * 1 )
            $(".navbar-dark").addClass("scrolled");
        else
            $(".navbar-dark").removeClass("scrolled");
    });
    
    //HAMBURGER MENU ANIMATION
    	$('#hamburger').on("click", function(){
            $(this).toggleClass('open');
	   });
    
    //PARTICLES
    particlesJS("particles-web", 
        {
          "particles": {
            "number": {
              "value": 120,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#e67e22"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ca9f61",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 4,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "bounce",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 200,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
    
    // ANIMATIONS
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top + 150;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            }
      });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    //COPYRIGHT YEAR
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
});
window.onload = function() {
    // HIDE LOADING SCREEN WHEN PAGE IS LOADED
    $('#progress').animate({ width:'100%'}, 1000, function() {
        $('#loader-wrapper').addClass('loaded');
    });
}
