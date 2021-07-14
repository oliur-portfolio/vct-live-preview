// Wrap every letter in a span
var textWrapper = document.querySelector(".counter-cover .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textWrapper = document.querySelector(".counter-cover1 .letters1");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");

// CountUp Effect
jQuery(document).ready(function ($) {
    $(".counter").counterUp({
        delay: 10,
        time: 3000,
    });
});
