let canvas = document.querySelector('#canvas')
canvas.width = 400
canvas.height = 500
let ctx = canvas.getContext('2d')

// array of pipe's positions and their height(top pipe) bottom pipe would be top+100
// the gap is set to 100,
let pipes=[[400,200],[650,Math.floor(Math.random()*100)+200]] 
let pipeGap=100
// BG stars
let starsArray=[]
for (let index = 0; index < 30; index++) {
    starsArray.push([Math.floor(Math.random()*350)+10,Math.floor(Math.random()*450)+10])
    
}
console.log(starsArray)
let startInterval
function start() {
    // Background
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    startInterval=setInterval(() => {
        // Background
        ctx.fillStyle = 'black'
        ctx.fillRect(0,0,canvas.width,canvas.height)
        for (let index = 0; index < starsArray.length; index++) {
            ctx.fillStyle = 'white'
            ctx.fillRect(starsArray[index][0],starsArray[index][1],1,1)
        }
        // Draw pipes TOP
        ctx.fillStyle = 'green'
        ctx.fillRect(pipes[0][0],0,50,pipes[0][1])
        ctx.fillRect(pipes[1][0],0,50,pipes[1][1])
        // Decorate pipes
        ctx.fillStyle = 'lime'
        ctx.fillRect(pipes[0][0],0,8,pipes[0][1])
        ctx.fillRect(pipes[1][0],0,8,pipes[1][1])
        ctx.fillRect(pipes[0][0]+15,0,3,pipes[0][1])
        ctx.fillRect(pipes[1][0]+15,0,3,pipes[1][1])
        ctx.fillStyle = 'darkgreen'
        ctx.fillRect(pipes[0][0]+45,0,5,pipes[0][1])
        ctx.fillRect(pipes[1][0]+45,0,5,pipes[1][1])
        ctx.fillRect(pipes[0][0]-5,pipes[0][1]-10,60,10)
        ctx.fillRect(pipes[1][0]-5,pipes[1][1]-10,60,10)
        ctx.fillStyle = 'green'
        ctx.fillRect(pipes[0][0]-5,pipes[0][1]-7,55,7)
        ctx.fillRect(pipes[1][0]-5,pipes[1][1]-7,55,7)
        ctx.fillStyle = 'lime'
        ctx.fillRect(pipes[0][0]-5,pipes[0][1]-7,3,7)
        ctx.fillRect(pipes[1][0]-5,pipes[1][1]-7,3,7)
        ctx.fillRect(pipes[0][0]+2,pipes[0][1]-7,2,7)
        ctx.fillRect(pipes[1][0]+2,pipes[1][1]-7,2,7)
        // Draw pipes Bottom
        ctx.fillStyle = 'green'
        ctx.fillRect(pipes[0][0],pipes[0][1]+pipeGap,50,canvas.height-pipes[0][1]+pipeGap) // start is : TopPipe.height+pipeGap(gap)--the height is canvas size-Y
        ctx.fillRect(pipes[1][0],pipes[1][1]+pipeGap,50,canvas.height-pipes[1][1]+pipeGap)
        // Decorate Bottom pipes
        ctx.fillStyle = 'lime'
        ctx.fillRect(pipes[0][0],pipes[0][1]+pipeGap,8,canvas.height-pipes[0][1]+pipeGap)
        ctx.fillRect(pipes[1][0],pipes[1][1]+pipeGap,8,canvas.height-pipes[1][1]+pipeGap)
        ctx.fillRect(pipes[0][0]+15,pipes[0][1]+pipeGap,3,canvas.height-pipes[0][1]+pipeGap)
        ctx.fillRect(pipes[1][0]+15,pipes[1][1]+pipeGap,3,canvas.height-pipes[1][1]+pipeGap)
        ctx.fillStyle = 'darkgreen'
        ctx.fillRect(pipes[0][0]+45,pipes[0][1]+pipeGap,5,canvas.height-pipes[0][1]+pipeGap)
        ctx.fillRect(pipes[1][0]+45,pipes[1][1]+pipeGap,5,canvas.height-pipes[1][1]+pipeGap)
        ctx.fillRect(pipes[0][0]-5,pipes[0][1]+pipeGap,60,10)
        ctx.fillRect(pipes[1][0]-5,pipes[1][1]+pipeGap,60,10)
        ctx.fillStyle = 'green'
        ctx.fillRect(pipes[0][0]-5,pipes[0][1]+pipeGap,56,7)
        ctx.fillRect(pipes[1][0]-5,pipes[1][1]+pipeGap,56,7)
        ctx.fillStyle = 'lime'
        ctx.fillRect(pipes[0][0]-5,pipes[0][1]+pipeGap,3,7)
        ctx.fillRect(pipes[1][0]-5,pipes[1][1]+pipeGap,3,7)
        ctx.fillRect(pipes[0][0]+2,pipes[0][1]+pipeGap,2,7)
        ctx.fillRect(pipes[1][0]+2,pipes[1][1]+pipeGap,2,7)
        // move pipes
        pipes[0][0]=pipes[0][0]-1
        pipes[1][0]=pipes[1][0]-1
        if (pipes[0][0]==-50) {
            let newPipeHeight = Math.floor(Math.random()*100)+200
            let newPipe=[]
            newPipe.push(400)
            newPipe.push(newPipeHeight)
            console.log(newPipe)
            pipes.push(newPipe)
            pipes.shift()
        }
    }, 20);
}
start()

// TODO: move the drawing into it's own function//class
// TODO: style the bg
// TODO: create Bird instance
// TODO: add some logic
// TODO: ADD AI --- Haaa Jaqee xD