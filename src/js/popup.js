const openBtn = document.querySelector(".catalog-btn");
const closeBtn = document.querySelector(".modal-close-btn");
const popup = document.querySelector(".popup-is-hidden");

function change () {
    document.body.classList.toggle("no-scroll");
    popup.classList.toggle("popup-is-hidden");
}

openBtn.addEventListener("click", change);
closeBtn.addEventListener("click", change);