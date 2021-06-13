'use strict'


function renderImgs() {
    var strsHTML = []
    getImgs().forEach(img => strsHTML.push(`<img src="${img.url}" alt"${img.url}" onclick="onImageClick(${img.id})">`))
    if (!strsHTML.length) return
    document.querySelector('.gallery').innerHTML = strsHTML.join('')
}

function displayGenerator() {
    displayNone('.about')
    displayNone('.filter')
    displayNone('.gallery')
    displayFlex('.generator')
}

function renderCanvas() {
    gCtx.save()
    var img = new Image()
    img.src = getImageUrl();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderStickers()
        renderLines()
    }
    renderInputsValues()
        // renderStickersStuck()
    gCtx.restore()
}

function renderLines() {
    if (gMeme.lines.length) {
        gMeme.lines.forEach((line, idx) => {
            if (idx !== gMeme.selctedLineIdx) renderLine(line, false)
        });
        renderLine(gCurrLine, true)
    }
}

function renderLine(line, isCurrLine) {
    gCtx.font = line.fontSize + 'px ' + line.fontFamily
    gCtx.lineWidth = line.lineWidth
    gCtx.strokeStyle = line.strokeStyle
    gCtx.textAlign = line.textAlign
    updateTxtWidth()
    if (isCurrLine) renderLineFrame()
    gCtx.fillStyle = line.fillStyle
    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y)
}

function renderLineTxt() {
    gCtx.fillText(gCurrLine.txt, gCurrLine.x, gCurrLine.y)
    gCtx.strokeText(gCurrLine.txt, gCurrLine.x, gCurrLine.y)
}

function displayNone(elSelector) {
    document.querySelector(elSelector).style.display = 'none'
}

function displayBlock(elSelector) {
    document.querySelector(elSelector).style.display = 'block'
}

function displayFlex(elSelector) {
    document.querySelector(elSelector).style.display = 'flex'
}

function renderCategories() {
    var strsHTML = []
    gKeywords.forEach(keyWord => {
        var className = getKeyWordclass(keyWord.value)
        strsHTML.push(`<button class="${className}" value="${keyWord.name}" onclick="onSetFilterBy(this.value)">${keyWord.name}</button>`)
    })
    document.querySelector('.categories').innerHTML = strsHTML.join('')
}

function getKeyWordclass(keyWordValue) {
    switch (keyWordValue) {
        case 0:
            return 'very-few'
        case 1:
            return 'few'
        case 2:
            return 'avg'
        case 3:
            return 'much'
        case 4:
            return 'very-much'
    }
}

function clearInput() {
    document.querySelector('.tool-bar [type="text"]').value = ''
}

function renderInputValue() {
    if (!gMeme.lines.length) return clearInput()
    document.querySelector('.tool-bar [type="text"]').value = gCurrLine.txt
}


function renderLineFrame() {
    if (gIsDownload) return
    gCtx.beginPath()

    var padding = 0.4 * gCurrLine.fontSize
    var x = getRectXCoord(padding)
    var y = getRectYCoord()
    var width = getRectWidth(padding)
    var height = getRectHeight(padding)

    updateLineFrame(x, y, width, height)

    gCtx.textAlign = gCurrLine.textAlign
    gCtx.fillStyle = '#ff80007e'
    gCtx.rect(x, y, width, height)
    gCtx.fillRect(x, y, width, height)
}



function getRectHeight(linePadding) {
    return gCurrLine.fontSize + linePadding
}

function getRectWidth(linePadding) {
    return gCurrLine.txtWidth + linePadding * 3
}

function updateLineFrame(x, y, width, height) {
    gLineFrame = {
        x,
        y,
        width,
        height
    }
}

function getRectXCoord(linePadding) {
    switch (gCurrLine.textAlign) {
        case 'left':
            return gCurrLine.x - (linePadding * 1.5)
        case 'center':
            return gCurrLine.x - (gCurrLine.txtWidth / 2) - (linePadding * 1.5)
        case 'right':
            return gCurrLine.x - gCurrLine.txtWidth - (linePadding * 1.5)
    }
}

function getRectYCoord() {
    return gCurrLine.y - gCurrLine.fontSize * 1.1
}

function renderInputsValues() {
    document.querySelector('.txt').value = (!gMeme.lines.length) ? '' : gCurrLine.txt
    document.querySelector('.fill').value = (!gMeme.lines.length) ? '#FFFFFF' : gCurrLine.fillStyle
    document.querySelector('.stroke').value = (!gMeme.lines.length) ? '#000000' : gCurrLine.strokeStyle
    document.querySelector('.fonts').value = (!gMeme.lines.length) ? 'impact' : gCurrLine.fontFamily
}

function renderStickersStuck() {
    var strsHTML = []
    for (var i = gCurrStickersPage; i < gCurrStickersPage + NUM_OF_STICKERS_FOR_DISPLAY && i < gStickers.length; i++)
        strsHTML.push(`<img class="sticker" onclick="onStickerClick(${gStickers[i].id})" src="${gStickers[i].url}">`)
    document.querySelector('.stickers').innerHTML = strsHTML.join('')
}



function drawSticker(id) {
    var sticker = getStickerById(id)
    var img = new Image()
    img.src = sticker.url
    img.onload = () => {
        gCtx.drawImage(img, sticker.x, sticker.y, sticker.width, sticker.height)
            // if (gMeme.lines.length) renderLines()
    }
}

function renderStickers() {
    if (gMeme.stickers.length) {
        gMeme.stickers.forEach(sticker => {
            drawSticker(sticker.id)
        });
    }
}

function getStickerById(id) {
    return gMeme.stickers.find(sticker => sticker.id === id)
}