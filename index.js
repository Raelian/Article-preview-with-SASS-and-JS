document.querySelector(".footer__button").addEventListener("click", function() {
    let barStatus = document.querySelector(".share-bar");
    let btnStatus = document.querySelector(".footer__button");
    barStatus.classList.toggle("share-bar--hide");
    barStatus.classList.toggle("share-bar--show");
    btnStatus.classList.toggle("footer__button--active");
    btnStatus.classList.toggle("footer__button--inactive");
});