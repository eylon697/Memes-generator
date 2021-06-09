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
        keywords: ['happy']
    },
    {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['funny']
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



function getImageUrl() {
    return gImgs.find(img => img.id === gMeme.selectedImgId).url
}