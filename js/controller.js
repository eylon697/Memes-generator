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