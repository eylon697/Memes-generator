'use strict'


var gCanvas
var gCtx

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}

var gKeywords = {
    'happy': 1,
    'funny': 1
}

var gImgs = [{
        id: 1,
        url: 'img/1.jpg',
        keywords: ['happy']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['funny']
    },
];



function getImageUrl() {
    return gImgs.find(img => img.id === gMeme.selectedImgId).url
}