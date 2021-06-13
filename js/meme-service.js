'use strict'

const NUM_OF_STICKERS_FOR_DISPLAY = 3

var gCtx
var gMeme
var gCanvas
var gCurrLine
var gLineFrame
var gFilterBy
var gInputFilter
var gIsDownload = false
var gCurrStickersPage = 4
    // var gCurrItem


var gKeywords = [{
        name: 'happy',
        value: 1
    },
    {
        name: 'funny',
        value: 4
    },
    {
        name: 'books',
        value: 0
    },

]


var gImgs = [{
        id: 1,
        url: 'img/1.jpg',
        keywords: ['happy']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['dogs']
    },
    {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['funney']
    },
    {
        id: 4,
        url: 'img/4.jpg',
        keywords: ['funny']
    },
    {
        id: 5,
        url: 'img/5.jpg',
        keywords: ['funny']
    },
    {
        id: 6,
        url: 'img/6.jpg',
        keywords: ['funny']
    },
    {
        id: 7,
        url: 'img/7.jpg',
        keywords: ['funny']
    },
    {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['funny']
    },
    {
        id: 9,
        url: 'img/9.jpg',
        keywords: ['funny']
    },
    {
        id: 10,
        url: 'img/10.jpg',
        keywords: ['funny']
    },
    {
        id: 11,
        url: 'img/11.jpg',
        keywords: ['funny']
    },
    {
        id: 12,
        url: 'img/12.jpg',
        keywords: ['funny']
    },
    {
        id: 13,
        url: 'img/13.jpg',
        keywords: ['funny']
    },
    {
        id: 14,
        url: 'img/14.jpg',
        keywords: ['funny']
    },
    {
        id: 15,
        url: 'img/15.jpg',
        keywords: ['funny']
    },
    {
        id: 16,
        url: 'img/16.jpg',
        keywords: ['funny']
    },
    {
        id: 17,
        url: 'img/17.jpg',
        keywords: ['funny']
    },
    {
        id: 18,
        url: 'img/18.jpg',
        keywords: ['funny']
    },
];

var gStickers = [{
        id: 0,
        url: 'stickers/00.png'
    },
    {
        id: 1,
        url: 'stickers/1.svg'
    },
    {
        id: 2,
        url: 'stickers/2.png'
    },
    {
        id: 3,
        url: 'stickers/3.png'
    },
    {
        id: 4,
        url: 'stickers/4.png'
    },
    {
        id: 5,
        url: 'stickers/5.png'
    },
    {
        id: 6,
        url: 'stickers/6.png'
    },
    {
        id: 7,
        url: 'stickers/7.png'
    },
    {
        id: 8,
        url: 'stickers/8.png'
    },
    {
        id: 9,
        url: 'stickers/9.png'
    },
]


function updateCurrLine() {
    gCurrLine = gMeme.lines[gMeme.selectedLineIdx]
}

// function updateSelctedItem(type, idx) {
//     if (type === 'line') gCurrItem = gMeme.lines[idx]
//     else if (type === 'sticker') gCurrItem = gMeme.stickers[idx]
//     else console.error('Fail to update selected item')
// }

function getImageUrl() {
    return gImgs.find(img => img.id === gMeme.selectedImgId).url
}

function resetMeme() {
    const elContainer = document.querySelector('canvas')
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: 0,
        selectedStickerIdx: 0,
        // selectedItem: null,
        lines: [{
            txt: 'Enter your txt',
            x: elContainer.width * 0.92,
            y: 80,
            fontSize: 40,
            lineWidth: 2,
            txtWidth: null,
            fontFamily: 'impact',
            textAlign: 'center',
            fillStyle: '#FFFFFF',
            strokeStyle: '#000000',
            isDrag: false
        }],
        stickers: []
    }
}

function setSelectedImgId(imgId) {
    gMeme.selectedImgId = imgId
}

function setMemeLineTxt() {
    // if (gCurrItem.txt === undefined) return
    gCurrLine.txt = document.querySelector('.tool-bar [type="text"]').value
}

function resetCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
}

function addLine() {
    var yCoord = getDynamicYCoord()
    gMeme.lines.push({
        txt: 'Enter your txt',
        x: 275,
        y: yCoord,
        fontSize: 50,
        lineWidth: 2,
        txtWidth: null,
        fontFamily: 'impact',
        textAlign: 'center',
        fillStyle: '#FFFFFF',
        strokeStyle: '#000000',
        isDrag: false
    })
}

function deleteLine() {
    if (gMeme.lines.length) gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function setSelctedLineIdx(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
}

function switchLineId() {
    var idx = gMeme.selectedLineIdx
    gMeme.selectedLineIdx = (idx + 1 >= gMeme.lines.length) ? 0 : idx + 1
}

function setLastLineIdx() {
    var idx = gMeme.lines.length - 1
    gMeme.selectedLineIdx = (idx >= 0) ? idx : 0
}

function getDynamicYCoord() {
    switch (gMeme.lines.length) {
        case 0:
            return 80
        case 1:
            return 500
        case 2:
            return 275
    }
    return 275
}

function updateTxtWidth() {
    gCurrLine.txtWidth = gCtx.measureText(gCurrLine.txt).width
}

function increaseFont() {
    gCurrLine.fontSize += 5
}

function decreaseFont() {
    gCurrLine.fontSize -= 5
}

function align(value) {
    gCurrLine.textAlign = value
}

function changeFont(val) {
    gCurrLine.fontFamily = val
}

function changeStroke(val) {
    gCurrLine.strokeStyle = val
}

function changeFill(val) {
    gCurrLine.fillStyle = val
}

function scrollStickers(val) {
    gCurrStickersPage += val
}

function getStickerUrl(id) {
    return gStickers.find(sticker => sticker.id === id).url
}

function getMmemStickerUrl(id) {
    return gMeme.stickers.find(sticker => sticker.id === id).url
}

function addSticker(id) {
    gMeme.stickers.push({
        id: gMeme.stickers.length,
        url: getStickerUrl(id),
        x: gCanvas.width * 3.5 / 10,
        y: gCanvas.height * 3.5 / 10,
        height: gCanvas.height * 3 / 10,
        width: gCanvas.width * 3 / 10
    })
}

function updateLineFrame(x, y, width, height) {
    gLineFrame = { x, y, width, height }
}

function getFirstEqualLineIdx(line) {
    return gMeme.lines.findIndex(curLine => {
        for (var prop in curLine) {
            if (curLine[prop] !== line[prop]) return false
        }
        return true
    })
}

function updateFilterBy(filterBy) {
    gFilterBy = filterBy
}

function updateFilter(inputFilter) {
    gInputFilter = inputFilter
}

function getImgs() {
    var regex = new RegExp(gInputFilter, 'i')
    return gImgs.filter(img => regex.test(img.keywords[0]))
}