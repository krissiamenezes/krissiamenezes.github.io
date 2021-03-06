/**
 * Template Name: Amoeba - v2.0.0
 * Template URL: https://bootstrapmade.com/free-one-page-bootstrap-template-amoeba/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

})(jQuery);
/*Scripts de manipulação das normativas*/
$(document).ready(function() {
/*
  $('#ocultar').hide();
*/
  $(".tipo").hide();
  $(".modalidade").hide();
  $(".wcag").hide();
});
$(".categoria").click(function() {
  var categoria =$(this).attr("id")
  $(".card").hide();
  $(".classe").hide();
  $('.' + categoria).show();
});
function verTodos(args) {
  $(".card").hide();
  $(".classe").hide();
  /*Ver todos dos 7 principios do DU*/
  if (args.length==7){
    for (var i = 0; i < args.length; i++) {
      var categoria =args[i];
      $('.' + categoria).show();
    }
  }/*Outros casos*/
  else{
    for (var i = 0; i < args.length; i++) {
      var categoria =args[i];
      $('.' + categoria).show();
      $(".classe").hide();
    }
  }
}

$(".exibe").click(function() {
  var id = $(this).attr("id");
  if (id=="ocultar"){
    $('a[data-toggle="collapse"]').addClass('collapsed');
    $('.multi-collapse').removeClass('show');

  }
  if (id=="mostrar"){
    $('a[data-toggle="collapse"]').removeClass('collapsed');
    $('.multi-collapse').addClass('show');

  }
});
/*$("#imprimirnormativas").click(function () {
  window.print();
})*/

$("#imprimirnormativas").click(function () {
  $(".oculta-lista").addClass('no-print');
  //Hide all other elements other than printarea.
  window.print();
  $(".oculta-lista").removeClass('no-print');

})