/* ---------------------------------------------------------------------------
 * Name         : Varuna SCU - Resort Hotel HTML5 Template
 * File         : main.js
 * Version      : 1.0
/* --------------------------------------------------------------------------*/
"use strict";
function getRandom(min, max){
  return Math.random() * (max - min) + min;
}
var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);
if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

// Button Ripple
if($('#component-8').length >0 ){
  initBt8();
  function initBt8() {
    var bt = document.querySelectorAll('#component-8')[0];
    var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
    var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];
    
    bt.addEventListener('mouseover', function(e) {
      TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
      TweenLite.to(turb, 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
      TweenLite.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
    });
  }
}