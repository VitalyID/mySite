document.getElementById("popup-btn").addEventListener("click", function () {
    document.getElementById("popup-cont").classList.add("open")
})
document.getElementById("btn-close").addEventListener("click", function () {
    document.getElementById("popup-cont").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("popup-cont").classList.remove("open")
    }
})


// document.querySelector('#popup-cont .popup-window').addEventListener('click', event => {
//     event._isClickWithModal = true;
// })
// document.getElementById('popup-cont').addEventListener('click', event => {
//     if (event._IsClickWithInModal) return;
//     event.currentTarget.classList.remove('open')
// })
