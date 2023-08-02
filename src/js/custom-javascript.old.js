
/*==================================
  # Custom JS
===================================*/

/**
 * Defining Slick Slider variables
*/

(function ($) {
  $('.slider .gallery').slick({
    arrows: true,
    infinite: true,
    pagination: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    rows: 0,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button" aria-lable="Previous"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button" aria-label="Next"></button>',
    appendArrows: $('.slider__pagination'),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }
    ],
  });
})(jQuery);

/**
 * mobile menu
*/

jQuery(document).ready(function ($) {
  "use strict";

      // Desktop Menu Dropdown Click 
      $("#cssmenu ul li > ul li.menu-item-has-children>a").append('<span class="dropdown fas fa-chevron-down"></span>');
       $('#cssmenu ul li > ul li a').on('click','.fa-chevron-down',function(){
        event.preventDefault();
           $(this).parent().siblings("ul").slideToggle();
           $(this).toggleClass("fa-chevron-up");
           
     })

      // Mobile Menu
        var width = $(window).width();
      $('#mobilecssmenu li.has-sub > a').append('<span class="fa fa-chevron-down"></span>');
       $('#mobilecssmenu li.has-sub a').on('click','.fa-chevron-down',function(){
        event.preventDefault();
           $(this).parent().siblings("ul").slideToggle();
     })
     $('.mobile-menu').on('click',function(){
          $("#mobilecssmenu >ul").slideToggle();
          $('#mobilecssmenu').toggleClass('open');
          $('.mobile-nav-wrapper').toggleClass('open');
          $('#content').toggleClass('fixed-position');
          $('footer').toggleClass('fixed-position');
          $('.subfooter').toggleClass('fixed-position');
          $("i", this).toggleClass('fa-times');
          $("i", this).toggleClass('fa-bars');
     });
     $('#mobilecssmenu li.has-sub > a span').on('click',function(){
      $(this).toggleClass("fa-chevron-up");
     });
     $('.mobile-menu').on('click',function(){
      $('body').toggleClass("mobile-menu-open");
     });

     $(".mobile-search").appendTo($("#mobilecssmenu > ul"));
 });

/**
 * Catching all external links and pdfs and adding target="_blank"
*/

jQuery.expr[':'].external = function(obj){
    return !obj.href.match(/^mailto\:/)
           && (obj.hostname != location.hostname || /.pdf$/.test(obj.href))
           && !obj.href.match(/^javascript\:/)
           && !obj.href.match(/^$/);
};

jQuery('a:external').attr('target', '_blank');

/**
 * AOS controls
*/

window.addEventListener('load', AOS.refresh());

(function($) {
  jQuery(document).ready(function($) {
      $('.alternating-section.image-right .image').each(function(i) {
          $(this).attr('data-aos', 'fade-left');
      });
      $('.alternating-section.image-left .image').each(function(i) {
          $(this).attr('data-aos', 'fade-right');
      });
      $('.card-column').each(function(i) {
          $(this).attr('data-aos', 'fade-up');
      });
      AOS.init({
          easing: 'ease-out-back',
          duration: 250,
          delay: 0,
          once: true,
          disable: 'mobile'
      });
  });
})(jQuery);

/**
 * Adding Loaded class for homepage animation
*/

window.onload = function() {
  jQuery(' .page ').addClass('loaded');
};

/**
 * Accordion
*/

  jQuery(document).ready(function($) {
    jQuery( ".accordion" ).accordion({
      collapsible: true,
      active: false,
    });
  })

/**
 * Toggle Buttons
*/


  jQuery(document).ready(function(){
  jQuery(".toggle").click(function(){
    jQuery(".toggle-table").toggle(100);
    if (jQuery(this).val() == "Hide Table") {
      jQuery(this).val("Show Table");
   }
   else {
      jQuery(this).val("Hide Table");
   }
  });

  jQuery(".source-toggler-toggle").click(function(){
    jQuery(".source-toggler").toggle(100);
    if (jQuery(this).val() == "Hide Source Toggler") {
      jQuery(this).val("Show Source Toggler");
   }
   else {
      jQuery(this).val("Hide Source Toggler");
   }
  });

  jQuery(".tcoe-toggle").click(function(){
    jQuery(".tcoe").toggle(100);
    if (jQuery(this).val() == "Hide TCoE") {
      jQuery(this).val("Show TCoE");
   }
   else {
      jQuery(this).val("Hide TCoE");
   }
  });
    jQuery(".mtof-toggle").click(function(){
    jQuery(".mtof").toggle(100);
    if (jQuery(this).val() == "Hide MToF") {
      jQuery(this).val("Show MToF");
   }
   else {
      jQuery(this).val("Hide MTof");
   }
  });
    jQuery(".erlw-toggle").click(function(){
    jQuery(".erlw").toggle(100);
    if (jQuery(this).val() == "Hide ERLW") {
      jQuery(this).val("Show ERLW");
   }
   else {
      jQuery(this).val("Hide ERLW");
   }
  });
    jQuery(".vgtm-toggle").click(function(){
    jQuery(".vgtm").toggle(100);
    if (jQuery(this).val() == "Hide VGtM") {
      jQuery(this).val("Show VGtM");
   }
   else {
      jQuery(this).val("Hide VGtM");
   }
  });
    jQuery(".ggtr-toggle").click(function(){
    jQuery(".ggtr").toggle(100);
    if (jQuery(this).val() == "Hide GGtR") {
      jQuery(this).val("Show GGtR");
   }
   else {
      jQuery(this).val("Hide GGtR");
   }
  });

  jQuery(".eepc-toggle").click(function(){
    jQuery(".eepc").toggle(100);
    if (jQuery(this).val() == "Hide EEPC") {
      jQuery(this).val("Show EEPC");
   }
   else {
      jQuery(this).val("Hide EEPC");
   }
  });

  jQuery(".xgte-toggle").click(function(){
    jQuery(".xgte").toggle(100);
    if (jQuery(this).val() == "Hide XGtE") {
      jQuery(this).val("Show XGtE");
   }
   else {
      jQuery(this).val("Hide XGtE");
   }
  });

  jQuery(".egtw-toggle").click(function(){
    jQuery(".egtw").toggle(100);
    if (jQuery(this).val() == "Hide EGtW") {
      jQuery(this).val("Show EGtW");
   }
   else {
      jQuery(this).val("Hide EGtW");
   }
   });

  jQuery(".scag-toggle").click(function(){
    jQuery(".scag").toggle(100);
    if (jQuery(this).val() == "Hide SCAG") {
      jQuery(this).val("Show SCAG");
   }
   else {
      jQuery(this).val("Hide SCAG");
   }
   });

   jQuery(".moot-toggle").click(function(){
    jQuery(".moot").toggle(100);
    if (jQuery(this).val() == "Hide MOoT") {
      jQuery(this).val("Show MOoT");
   }
   else {
      jQuery(this).val("Hide MOot");
   }
   });

   jQuery(".vrgtr-toggle").click(function(){
    jQuery(".vrgtr").toggle(100);
    if (jQuery(this).val() == "Hide VRGtR") {
      jQuery(this).val("Show VRGtR");
   }
   else {
      jQuery(this).val("Hide VRGtR");
   }
   });

   jQuery(".ttp-toggle").click(function(){
    jQuery(".ttp").toggle(100);
    if (jQuery(this).val() == "Hide TTP") {
      jQuery(this).val("Show TTP");
   }
   else {
      jQuery(this).val("Hide TTP");
   }
  });
  jQuery(".scoc-toggle").click(function(){
    jQuery(".scoc").toggle(100);
    if (jQuery(this).val() == "Hide SCoC") {
      jQuery(this).val("Show SCoC");
   }
   else {
      jQuery(this).val("Hide SCoC");
   }
  });
  jQuery(".ftod-toggle").click(function(){
    jQuery(".ftod").toggle(100);
    if (jQuery(this).val() == "Hide FToD") {
      jQuery(this).val("Show FToD");
   }
   else {
      jQuery(this).val("Hide FToD");
   }
  });

  if (jQuery(".scag").length > 0) {
    jQuery(".scag-toggle").show();
  }; 

    if (jQuery(".tcoe").length > 0) {
    jQuery(".tcoe-toggle").show();
  }; 

    if (jQuery(".xgte").length > 0) {
    jQuery(".xgte-toggle").show();
  }; 

    if (jQuery(".egtw").length > 0) {
    jQuery(".egtw-toggle").show();
  }; 

    if (jQuery(".moot").length > 0) {
    jQuery(".moot-toggle").show();
  }; 

    if (jQuery(".vrgtr").length > 0) {
    jQuery(".vrgtr-toggle").show();
  }; 

      if (jQuery(".eepc").length > 0) {
    jQuery(".eepc-toggle").show();
  }; 
      if (jQuery(".ggtr").length > 0) {
    jQuery(".ggtr-toggle").show();
  }; 
      if (jQuery(".vgtm").length > 0) {
    jQuery(".vgtm-toggle").show();
  };       
  if (jQuery(".mtof").length > 0) {
    jQuery(".mtof-toggle").show();
  }; 
    if (jQuery(".erlw").length > 0) {
    jQuery(".erlw-toggle").show();
  }; 
  if (jQuery(".ttp").length > 0) {
    jQuery(".ttp-toggle").show();
  }; 
  if (jQuery(".scoc").length > 0) {
    jQuery(".scoc-toggle").show();
  };
    if (jQuery(".ftod").length > 0) {
    jQuery(".ftod-toggle").show();
  }; 


  jQuery(".tcoe").prepend('<a href="#sources" class="source-link">TCoE</a> ');
  jQuery(".scag").prepend('<a href="#sources" class="source-link">SCAG</a> ');
  jQuery(".xgte").prepend('<a href="#sources" class="source-link">XGtE</a> ');
  jQuery(".egtw").prepend('<a href="#sources" class="source-link">EGtW</a> ');
  jQuery(".moot").prepend('<a href="#sources" class="source-link">MOoT</a> ');
  jQuery(".vrgtr").prepend('<a href="#sources" class="source-link">VRGtR</a> ');
  jQuery(".eepc").prepend('<a href="#sources" class="source-link">EEPC</a> ');
  jQuery(".ggtr").prepend('<a href="#sources" class="source-link">GGtR</a> ');
  jQuery(".mtof").prepend('<a href="#sources" class="source-link">MToF</a> ');
  jQuery(".vgtm").prepend('<a href="#sources" class="source-link">VGtM</a> ');
  jQuery(".erlw").prepend('<a href="#sources" class="source-link">ERLW</a> ');
  jQuery(".ttp").prepend('<a href="#sources" class="source-link">TTP</a> ');
  jQuery(".ttp").prepend('<a href="#sources" class="source-link">TTP</a> ');
  jQuery(".scoc").prepend('<a href="#sources" class="source-link">TTP</a> ');
  jQuery(".ftod").prepend('<a href="#sources" class="source-link">TTP</a> ');

});