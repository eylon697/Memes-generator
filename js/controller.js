'use strict'


function init() {
    renderImgs()
}

function onImageClick(imgId) {
    resetMeme()
    resetCanvas()
    displayNone('main')
    displayNone('.filter')
    displayBlock('.generator')
    setMemeImg(imgId)
    renderCanvas()
    drawText()
}

function resetCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function displayNone(elSelector) {
    document.querySelector(elSelector).style.display = 'none'
}

function displayBlock(elSelector) {
    document.querySelector(elSelector).style.display = 'block'
}

function renderCanvas() {
    setCanvasImg()
}

function setCanvasImg() {
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
    gImgs.forEach(img => strsHTML.push(`<img src="${img.url}" alt"${img.url}" onclick="onImageClick(${img.id})">`))
    if (!strsHTML.length) return
    document.querySelector('.gallery').innerHTML = strsHTML.join('')
}