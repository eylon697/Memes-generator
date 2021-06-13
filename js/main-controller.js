'use strict'

function init() {
    renderImgs()
    renderCategories()
}

function onImageClick(imgId) {
    resetMeme()
    updateCurrLine()
    resetCanvas()
    displayGenerator()
    setSelectedImgId(imgId)
    renderCanvas()
    renderStickersStuck()
    resizeCanvas()
    addListeners()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onInputFilter(inputFilter) {
    updateFilter(inputFilter)
    renderImgs()
}

function onSetFilterBy(filterBy) {
    setFilterBy(filterBy)
    renderImgs()
}

function onAboutClick() {
    display('.about', 'flex')
    window.scrollTo(0, document.body.scrollHeight);
}

function onGalleryClick() {
    displayGallery()
}