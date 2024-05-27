(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//INICIO eventos de Clicks 
$("#flt-clk-vd").click(function () {
    $(this).addClass("hide");

    var vidPlay = document.getElementById("video-po");
    vidPlay.play();
});

var wdt = innerWidth;

if (wdt > 768) {
    $('#key-slk-dep').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });
} else {
    setTimeout(function () {
        $('#key-slk-dep').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    }, 500);
}
//FIM eventos de Clicks

},{}]},{},[1]);
