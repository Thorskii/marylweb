import Swup from 'swup';
const swup = new Swup();


window.addEventListener('load', function () {
    VANTA.FOG({
    el: "#animation-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x7ddcfa,
    midtoneColor: 0x4aa7ca,
    lowlightColor: 0x406391
    })
})

