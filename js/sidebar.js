document.querySelector(".hamburger").classList.toggle("active");

document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".main").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
});