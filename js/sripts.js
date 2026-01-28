/* ------------------------------------------------------------------
 * Name         : Varuna SCU - Resort Hotel HTML5 Template
 * File         : sripts.js
 * Version      : 1.1
 * Author       : ScanThemes
 * Author URI   : scanthemes@gmail.com
 *
 * Copyright 2018 All Rights Reserved.
/* ------------------------------------------------------------------*/

/* --------------------------------------------------------------------
 *
    1. Page Preloader
    2. Screenshots
    3. Bootstrap Navigation Bar
    4. Bootstrap Modal Video
    5. Scroll To Top
    6. Bootstrap Slider
    7. Modal Video
 *
 * ----------------------------------------------------------------- */

"use strict";

$(function() {

  //----------- 1. Page Preloader ----------- 
  var $preloader = $('#preloader').delay(700).fadeOut('slow').find('#spinner').fadeOut('slow');

  $(window).on('load resize', function () { 
    //----------- 2. Screenshots ----------- 
    var padding = parseInt($('#screenshots').find('li').css('padding-top'), 10),
    calculate = ($('#screenshots').find('.eq-img').height() + padding)*2,
    calculate_rs = ($('#video-modal').width())*9/16; // 16:9
    if( matchMedia('only screen and (min-width: 992px)').matches ){
      $('#screenshots').find('#video-modal').css('height', calculate);
    } else {
      $('#screenshots').find('#video-modal').css('height', calculate_rs);
    }
  });

  //----------- 3. Bootstrap Navigation Bar ----------- 
  $('#mainNav').affix({
    offset: { top: 100 }
  });

  //----------- 4. Bootstrap Modal Video ----------- 
  $("#video").on('click', function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').on('click', function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });

  //----------- 5. Scroll To Top ----------- 
  $(window).on('scroll', function () {
    ($(this).scrollTop() > 50) ? ($('#back-to-top').fadeIn()) : ($('#back-to-top').fadeOut());
  });
  $('#back-to-top').on('click', function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
  $('#back-to-top').tooltip('show');

  //----------- 6. Bootstrap Slider ----------- 
  $('#mainSlider').carousel({
      interval: 5000 // set interval
  });

  //----------- 7. Modal Video ---------------- 
  $('.modal').on('hidden.bs.modal', function() {
    $('.modal-body iframe').removeAttr('src');
  });
});