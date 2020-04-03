    // loading

$(document).ready(function () {
    $("#loading").hide(1000, function () {
        $("body").css("overflow", "auto");
    });
});












// effect on navbar when scroll
let navLinks = Array.from(this.document.querySelectorAll(".nav-link"));

navLinks.forEach(navLink => {
    window.addEventListener("scroll", function () {
        let windowScroll = $(window).scrollTop();
        let aLink = $(navLink).attr("id");
        let secOffset = $(aLink).offset().top;

        if (windowScroll >= secOffset) {
            navLinks.forEach(navLink => {
                navLink.classList.remove("active");
            });
            navLink.classList.add("active");
        }
    })
});












// navbar backgroundColor
// let aboutOffset = $("#about").offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > 30) {
        $("header").css("backgroundColor", "#eee");
        $("header").css("padding", "0px 50px");
        $(".navbar-btn").css("backgroundColor", "#eee");
        $(".top-btn").fadeIn(500);
    } else {
        $("header").css("backgroundColor", "#222222");
        $("header").css("padding", "0px 0px");
        $(".navbar-btn").css("backgroundColor", "#222222");
        $(".top-btn").fadeOut(500);
    }
});










// top btn
$(".top-btn").click(function () {
    $("html,body").animate({
        scrollTop: '0'
    }, 1000);
});















/*navbar btn & list(side bar)*/
var navbarBtn = document.querySelector(".navbar-btn");
var navbarBtnIcon = document.querySelector("#toggle");
var navbarList = document.querySelector(".navbar-list");

navbarBtn.addEventListener("click", function () {
    // navbarBtnIcon.className.replace("fa-bars","fa-times");
    // navbarBtnIcon.classList.item(1).replace("fa-bars", "fa-times");
    //  navbarBtnIcon.classList[1].replace("fa-bars","fa-times");

    if (navbarBtnIcon.classList.contains("fa-bars")) {
        navbarBtnIcon.classList.replace("fa-bars", "fa-times");
        navbarList.classList.add("show-nav");
        // navbarList.style.display = "block";

    } else {
        navbarBtnIcon.classList.replace("fa-times", "fa-bars");
        navbarList.classList.remove("show-nav");
        // navbarList.style.display = "none";
    }
})








/*Live typing*/
let typing = document.querySelector("#liveTyping");
let text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint
vel eius quisquam!`;
let i = 0;
let textTyping = setInterval(liveTyping, 20);

function liveTyping() {
    typing.innerHTML += text[i];
    i++;
    if (i >= text.length) {
        // i = 0;
        // typing.innerHTML = "";
        clearInterval(textTyping);
    }
}













/*Filtrable*/
// let areaTitle = document.querySelectorAll("#services .area-items .area .area-title");
// let areaItems = document.querySelector(".area-items");
let areaSearch = document.getElementById("area-search");
let areaItem = document.querySelectorAll(".area");
let title;

areaSearch.addEventListener("keyup", function () {
    areaItem.forEach(item => {
        title = item.querySelector(".area-title").textContent;
        // console.log(item.querySelector(".area-title").textContent);
        // console.log(title.indexOf(this.value));
        if (title.toLowerCase().indexOf((this.value).toLowerCase()) > -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });





    // areaTitle.forEach(title => {

    //     if (title.textContent.toLowerCase().includes(this.value.toLowerCase())) {
    //         // console.log(title.parentElement.parentElement);

    //         areaItem.forEach(item => {
    //             // console.log(title.parentElement.parentElement);

    //             areaItems.replaceChild(title.parentElement.parentElement, item);

    //             // item.style.display = "none";
    //             // title.parentElement.parentElement.style.display = "block";
    //         });
    //     }
    // });
})