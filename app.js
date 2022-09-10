


// document.querySelector(".img-carousel").scrollLeft += 565;


document.querySelector(".arrow-left").addEventListener("click", scrollLeft);
document.querySelector(".arrow-right").addEventListener("click", scrollRight);


function scrollLeft() {
    document.querySelector(".img-carousel").scrollBy({
        top: 0, 
        left: -565, 
        behavior: 'smooth'});
}
function scrollRight() {
    document.querySelector(".img-carousel").scrollBy({
        top: 0, 
        left: 565, 
        behavior: 'smooth'});
}
// function checkScroll() {
//     if (document.querySelector(".img-carousel").scrollLeft > 1600) {
//         document.querySelector(".arrow-right").style.opacity = "0.3";
//     } else {
//         document.querySelector(".arrow-right").style.opacity = "1";
//     }
//     if (document.querySelector(".img-carousel").scrollLeft < 100) {
//         document.querySelector(".arrow-left").style.opacity = "0.3";
//     } else {
//         document.querySelector(".arrow-left").style.opacity = "1";
//     }
// }

// var checkScrollTimer = setInterval(checkScroll, 100)
// checkScroll();

