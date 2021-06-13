'use strict'


function init() {
    renderImgs()
    renderCategories()
}

function onImageClick(imgId) {
    resetMeme()
    updateCurrLine()
        // updateSelctedItem('line', 0)
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
    updateFilterBy(filterBy)
    renderImgs()
}

function onAboutClick() {
    displayFlex('.about')
    window.scrollTo(0, document.body.scrollHeight);
}

function onGalleryClick() {
    displayGallery()
}