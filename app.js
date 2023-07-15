let canvas = document.querySelector('#canvas')
canvas.width = 400
canvas.height = 500
let ctx = canvas.getContext('2d')

// array of pipe's positions and their height(top pipe) bottom pipe Y would be top+gap
// min height is 200 max is 299
let pipes = [[400, 200], [650, Math.floor(Math.random() * 150) + 150]]
let pipeGap = 100
// BG stars
let starsArray = []
for (let index = 0; index < 30; index++) {
    starsArray.push([Math.floor(Math.random() * 350) + 10, Math.floor(Math.random() * 450) + 10])
}
let startInterval
let bird = [180, 200]
let birdInterval
let birdUpTimout
function start() {
    // Background
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    startInterval = setInterval(() => {
        drawPipes(pipes, pipeGap)
        drawBird(bird[0], bird[1])
        // add another pipe
        if (pipes[0][0] == -50) {
            let newPipeHeight = Math.floor(Math.random() * 150) + 150
            pipes.push([400, newPipeHeight])
            pipes.shift()
        }
    }, 10);
}
start()

document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowUp') {
        clearTimeout(birdUpTimout)
        clearInterval(birdInterval)
        for (let t = 0; t < 20; t++) {
            birdUp(t)
        }
        birdUpTimout = setTimeout(() => {
            birdDown()
        }, 220);

    }
})

function birdUp(i) {
    setTimeout(() => {
        bird[1] = bird[1] - 1
    }, 7 * i);
}
function birdDown() {
    birdInterval = setInterval(() => {
        bird[1] = bird[1] + 2
    }, 20);
}

function drawBird(x, y) {
    ctx.fillStyle = 'goldenrod'
    ctx.fillRect(x, y, 30, 30)
}

function drawPipes(pipesArray, gap) {
    // Background
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    for (let index = 0; index < starsArray.length; index++) {
        ctx.fillStyle = 'white'
        ctx.fillRect(starsArray[index][0], starsArray[index][1], 1, 1)
    }
    // Draw pipes TOP
    ctx.fillStyle = 'green'
    ctx.fillRect(pipesArray[0][0], 0, 50, pipesArray[0][1])
    ctx.fillRect(pipesArray[1][0], 0, 50, pipesArray[1][1])
    // Decorate pipes
    ctx.fillStyle = 'lime'
    ctx.fillRect(pipesArray[0][0], 0, 8, pipesArray[0][1])
    ctx.fillRect(pipesArray[1][0], 0, 8, pipesArray[1][1])
    ctx.fillRect(pipesArray[0][0] + 15, 0, 3, pipesArray[0][1])
    ctx.fillRect(pipesArray[1][0] + 15, 0, 3, pipesArray[1][1])
    ctx.fillStyle = 'darkgreen'
    ctx.fillRect(pipesArray[0][0] + 45, 0, 5, pipesArray[0][1])
    ctx.fillRect(pipesArray[1][0] + 45, 0, 5, pipesArray[1][1])
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] - 10, 60, 10)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] - 10, 60, 10)
    ctx.fillStyle = 'green'
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] - 7, 55, 7)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] - 7, 55, 7)
    ctx.fillStyle = 'lime'
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] - 7, 3, 7)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] - 7, 3, 7)
    ctx.fillRect(pipesArray[0][0] + 2, pipesArray[0][1] - 7, 2, 7)
    ctx.fillRect(pipesArray[1][0] + 2, pipesArray[1][1] - 7, 2, 7)
    // Draw pipes Bottom
    ctx.fillStyle = 'green'
    ctx.fillRect(pipesArray[0][0], pipesArray[0][1] + pipeGap, 50, canvas.height - pipesArray[0][1] + pipeGap) // start is : TopPipe.height+pipeGap(gap)--the height is canvas size-Y
    ctx.fillRect(pipesArray[1][0], pipesArray[1][1] + pipeGap, 50, canvas.height - pipesArray[1][1] + pipeGap)
    // Decorate Bottom pipes
    ctx.fillStyle = 'lime'
    ctx.fillRect(pipesArray[0][0], pipesArray[0][1] + pipeGap, 8, canvas.height - pipesArray[0][1] + pipeGap)
    ctx.fillRect(pipesArray[1][0], pipesArray[1][1] + pipeGap, 8, canvas.height - pipesArray[1][1] + pipeGap)
    ctx.fillRect(pipesArray[0][0] + 15, pipesArray[0][1] + pipeGap, 3, canvas.height - pipesArray[0][1] + pipeGap)
    ctx.fillRect(pipesArray[1][0] + 15, pipesArray[1][1] + pipeGap, 3, canvas.height - pipesArray[1][1] + pipeGap)
    ctx.fillStyle = 'darkgreen'
    ctx.fillRect(pipesArray[0][0] + 45, pipesArray[0][1] + pipeGap, 5, canvas.height - pipesArray[0][1] + pipeGap)
    ctx.fillRect(pipesArray[1][0] + 45, pipesArray[1][1] + pipeGap, 5, canvas.height - pipesArray[1][1] + pipeGap)
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] + pipeGap, 60, 10)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] + pipeGap, 60, 10)
    ctx.fillStyle = 'green'
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] + pipeGap, 56, 7)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] + pipeGap, 56, 7)
    ctx.fillStyle = 'lime'
    ctx.fillRect(pipesArray[0][0] - 5, pipesArray[0][1] + pipeGap, 3, 7)
    ctx.fillRect(pipesArray[1][0] - 5, pipesArray[1][1] + pipeGap, 3, 7)
    ctx.fillRect(pipesArray[0][0] + 2, pipesArray[0][1] + pipeGap, 2, 7)
    ctx.fillRect(pipesArray[1][0] + 2, pipesArray[1][1] + pipeGap, 2, 7)
    // move pipesArray
    pipesArray[0][0] = pipesArray[0][0] - 1
    pipesArray[1][0] = pipesArray[1][0] - 1
}

// TODO: move the drawing into it's own function//class
// TODO: style the bg
// TODO: create Bird instance
// TODO: add some logic
// TODO: add checks on bounds and pipes
// TODO: ADD AI --- Haaa Jaqee xD