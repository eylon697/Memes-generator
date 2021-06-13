'use strict'

function onTxtInput() {
    if (!gMeme.lines.length) onAddLineClick()
    setMemeLineTxt()
    renderCanvas()
}

function onAddLineClick() {
    addLine()
    setLastLineIdx()
    updateCurrLine()
    renderCanvas()
    clearInput()
}

function onDeleteLineClick() {
    if (!gMeme.lines.length) return
    deleteLine()
    setLastLineIdx()
    updateCurrLine()
    renderInputValue()
    renderCanvas()
}

function onSwitchLineClick() {
    switchLineId()
    updateCurrLine()
    renderCanvas()
}

function onIncreaseFontClick() {
    increaseFont()
    renderCanvas()
}

function onDecreaseFontClick() {
    decreaseFont()
    renderCanvas()
}

function onAlignClick(val) {
    align(val)
    renderCanvas()
}

function onFontChange(val) {
    changeFont(val)
    renderCanvas()
}

function onStrokeChange(val) {
    changeStroke(val)
    renderCanvas()
}

function onFillChange(val) {
    changeFill(val)
    renderCanvas()
}

function onScrollStickers(val) {
    if ((val === -1 && gCurrStickersPage === 1) ||
        (val === 1 && gCurrStickersPage === gStickers.length - NUM_OF_STICKERS_FOR_DISPLAY)) return
    scrollStickers(val)
    renderStickersStuck()
}

function onStickerClick(id) {
    addSticker(id)
    drawSticker(gMeme.stickers.length - 1)
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('')
    elLink.href = imgContent;
}

function onShareHover() {
    gIsDownload = true
    renderCanvas()
}

function onShareOut() {
    gIsDownload = false
    renderCanvas()
}