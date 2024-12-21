document.querySelectorAll('img').forEach(img => {
    img.onclick = () => {
        document.querySelector(".gallery__popup").style.display = 'flex';
        // document.querySelector(".gallery__popup img").src = img.getAttribute("src")
    }
});

document.querySelector(".gallery__btn-close").onclick = () => {
    document.querySelector(".gallery__popup").style.display = 'none';
}