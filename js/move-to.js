var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function resizeCanvas() {
    addListeners()
    renderCanvas()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
    })
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    var line = isLineClicked(pos)
    if (line) {
        setSelctedLineIdx(getFirstEqualLineIdx(line))
        updateCurrLine()
        setLineDrag(true)
        gStartPos = pos
        document.body.style.cursor = 'grabbing'
    } else return
        // {
        //     var sticker = isStickerClicked(pos)
        //     if (!sticker) return
        //     else{
        //         setSelctedLineIdx(getFirstEqualLineIdx(line))
        //         updateCurrLine()
        //         setLineDrag(true)
        //         gStartPos = pos
        //         document.body.style.cursor = 'grabbing'
        //     }
        // }
}

function onMove(ev) {
    const line = getLine();
    if (line.isDrag) {
        console.log(gCurrLine.isDrag);
        console.log(gCurrLine);
        const pos = getEvPos(ev)
        console.log('gStartPos:', gStartPos)
        console.log('pos:', pos)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveLine(dx, dy)
        gStartPos = pos
        renderCanvas()
    }
}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function drawArc(x, y, size = 60, color = 'blue') {
    gCtx.beginPath()
    gCtx.lineWidth = '6'
    gCtx.arc(x, y, size, 0, 2 * Math.PI)
    gCtx.strokeStyle = 'white'
    gCtx.stroke()
    gCtx.fillStyle = color
    gCtx.fill()
}

var gCurrLine

function createCircle(pos) {
    gCurrLine = {
        pos,
        size: 120,
        color: 'blue',
        isDrag: false
    }
}

function getLine() {
    return gCurrLine
}

function isLineClicked(clickedPos) {
    return gMeme.lines.find(line => {

        if (line.textAlign === 'left' && clickedPos.x < line.x ||
            line.textAlign === 'center' && clickedPos.x < line.x - line.txtWidth / 2 ||
            line.textAlign === 'right' && clickedPos.x < line.x - line.txtWidth) return false

        return clickedPos.x <= line.x + line.txtWidth &&
            clickedPos.y >= line.y - line.fontSize &&
            clickedPos.y <= line.y
    })
}

function isStickerClicked(clickedPos) {
    return gMeme.stickers.find(sticker => {
        return clickedPos.x >= sticker.x &&
            clickedPos.x <= sticker.x + sticker.width &&
            clickedPos.y >= sticker.y &&
            clickedPos.y <= sticker.y + sticker.height
    })
}


function setLineDrag(isDrag) {
    gCurrLine.isDrag = isDrag
}

function moveLine(dx, dy) {

    console.log('gCurrLine.x:', gCurrLine.x)
    console.log('gCurrLine.y:', gCurrLine.y)
    console.log('dy:', dy)
    console.log('dx:', dx)
    gCurrLine.x += dx
    gCurrLine.y += dy
    console.log('gCurrLine.x:', gCurrLine.x)
    console.log('gCurrLine.y:', gCurrLine.y)

}