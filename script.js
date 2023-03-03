// let header = document.getElementById("header");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");
const content5 = document.getElementById("content5");


content1.onclick = function(){
    const button = document.querySelector(".active-paragraph1");

    const image = document.querySelector(".arrow-down1");

    const header = document.querySelector(".header1");

    button.classList.toggle("active");
    image.classList.toggle("active");
    header.classList.toggle("active");
}


content2.onclick = function(){
    const button = document.querySelector(".active-paragraph2");

    const image = document.querySelector(".arrow-down2");

    const header = document.querySelector(".header2");

    button.classList.toggle("active");
    image.classList.toggle("active");
    header.classList.toggle("active");
}


content3.onclick = function(){
    const button = document.querySelector(".active-paragraph3");

    const image = document.querySelector(".arrow-down3");

    const header = document.querySelector(".header3");

    button.classList.toggle("active");
    image.classList.toggle("active");
    header.classList.toggle("active");
}


content4.onclick = function(){
    const button = document.querySelector(".active-paragraph4");

    const image = document.querySelector(".arrow-down4");

    const header = document.querySelector(".header4");

    button.classList.toggle("active");
    image.classList.toggle("active");
    header.classList.toggle("active");
}


content5.onclick = function(){
    const button = document.querySelector(".active-paragraph5");

    const image = document.querySelector(".arrow-down5");

    const header = document.querySelector(".header5");

    button.classList.toggle("active");
    image.classList.toggle("active");
    header.classList.toggle("active");
}

// const content = document.querySelectorAll(".content");

// const paragraph = document.querySelector(".active-paragraph");

// content.forEach((content) => {
//     content.addEventListenter("click", () => {
//         paragraph.classList.toggle(".answer");
//     });
// });