
/*==================================
  # Custom JS
===================================*/

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
  jQuery(".wbtw-toggle").click(function(){
    jQuery(".wbtw").toggle(100);
    if (jQuery(this).val() == "Hide WBtW") {
      jQuery(this).val("Show WBtW");
   }
   else {
      jQuery(this).val("Hide WBtW");
   }
  });
  jQuery(".motm-toggle").click(function(){
    jQuery(".motm").toggle(100);
    if (jQuery(this).val() == "Hide MotM") {
      jQuery(this).val("Show MotM");
   }
   else {
      jQuery(this).val("Hide MotM");
   }
  });
  jQuery(".sais-toggle").click(function(){
    jQuery(".sais").toggle(100);
    if (jQuery(this).val() == "Hide SAiS") {
      jQuery(this).val("Show SAiS");
   }
   else {
      jQuery(this).val("Hide SAiS");
   }
  });
  jQuery(".sotdq-toggle").click(function(){
    jQuery(".sotdq").toggle(100);
    if (jQuery(this).val() == "Hide SotDQ") {
      jQuery(this).val("Show SotDQ");
   }
   else {
      jQuery(this).val("Hide SotDQ");
   }
  });
  jQuery(".gotg-toggle").click(function(){
    jQuery(".gotg").toggle(100);
    if (jQuery(this).val() == "Hide GotG") {
      jQuery(this).val("Show GotG");
   }
   else {
      jQuery(this).val("Hide GotG");
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
  if (jQuery(".wbtw").length > 0) {
    jQuery(".wbtw-toggle").show();
  };
  if (jQuery(".motm").length > 0) {
    jQuery(".motm-toggle").show();
  };
  if (jQuery(".sais").length > 0) {
    jQuery(".sais-toggle").show();
  };
  if (jQuery(".sotdq").length > 0) {
    jQuery(".sotdq-toggle").show();
  };
  if (jQuery(".gotg").length > 0) {
    jQuery(".gotg-toggle").show();
  };


  jQuery(".tcoe").prepend('<span class="source-link">TCoE</span> ');
  jQuery(".scag").prepend('<span class="source-link">SCAG</span> ');
  jQuery(".xgte").prepend('<span class="source-link">XGtE</span> ');
  jQuery(".egtw").prepend('<span class="source-link">EGtW</span> ');
  jQuery(".moot").prepend('<span class="source-link">MOoT</span> ');
  jQuery(".vrgtr").prepend('<span class="source-link">VRGtR</span> ');
  jQuery(".eepc").prepend('<span class="source-link">EEPC</span> ');
  jQuery(".ggtr").prepend('<span class="source-link">GGtR</span> ');
  jQuery(".mtof").prepend('<span class="source-link">MToF</span> ');
  jQuery(".vgtm").prepend('<span class="source-link">VGtM</span> ');
  jQuery(".erlw").prepend('<span class="source-link">ERLW</span> ');
  jQuery(".ttp").prepend('<span class="source-link">TTP</span> ');
  jQuery(".scoc").prepend('<span class="source-link">SCoC</span> ');
  jQuery(".ftod").prepend('<span class="source-link">FToD</span> ');
  jQuery(".wbtw").prepend('<span class="source-link">WBtW</span> ');
  jQuery(".motm").prepend('<span class="source-link">MotM</span> ');
  jQuery(".sais").prepend('<span class="source-link">SAiS</span> ');
  jQuery(".sotdq").prepend('<span class="source-link">SotDQ</span> ');
  jQuery(".gotg").prepend('<span class="source-link">GotG</span> ');
});