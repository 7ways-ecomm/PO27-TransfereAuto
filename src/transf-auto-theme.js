//INICIO eventos de Clicks 
$("#flt-clk-vd").click(function () {
    $(this).addClass("hide");

    let vidPlay = document.getElementById("video-po");
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
        arrows: false,
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
            arrows: false,
        });
    },500)
}
//FIM eventos de Clicks 