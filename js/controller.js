'use strict'


function init() {
    renderImgs()
}

function onImageClick() {
    resetCanvas()
    toggleGallery()
    toggleGenerator()
    renderCanvas()
    drawText()
}

function resetCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function toggleGallery() {
    var elGallery = document.querySelector('main')
    elGallery.hidden = !elGallery.hidden
}

function toggleGenerator() {
    var elGallery = document.querySelector('.generator')
    elGallery.hidden = !elGallery.hidden
}

function renderCanvas() {
    loadImg()
}

function loadImg() {
    var img = new Image()
    img.src = getImageUrl();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function drawText() {
    gCtx.font = "30px Arial";
    gCtx.fillText("Hello World", 10, 50);
}

function renderCategories() {

}

function renderImgs() {
    var strsHTML = []
    gImgs.forEach(img => strsHTML.push(`<img src="${img.url}" alt"${img.url}">`))
    if (!strsHTML.length) return
    document.querySelector('.gallery').innerHTML = strsHTML.join('')
}