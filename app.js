let canvas = document.querySelector('#canvas')
canvas.width = 400
canvas.height = 500
let ctx = canvas.getContext('2d')

// array of pipe's positions and their height(top pipe) bottom pipe would be top+100
// the gap is set to 100,
let pipes=[[400,Math.floor(Math.random()*100)+100],[650,Math.floor(Math.random()*100)+100]] 

let startInterval
function start() {
    // Background
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    startInterval=setInterval(() => {
        // Background
        ctx.fillStyle = 'black'
        ctx.fillRect(0,0,canvas.width,canvas.height)
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
        // Draw pipes Bottom
        ctx.fillStyle = 'green'
        ctx.fillRect(pipes[0][0],pipes[0][1]+150,50,canvas.height-pipes[0][1]+150) // start is : TopPipe.height+100(gap)--the height is canvas size-Y
        ctx.fillRect(pipes[1][0],pipes[1][1]+150,50,canvas.height-pipes[1][1]+150)
        // Decorate Bottom pipes
        ctx.fillStyle = 'lime'
        ctx.fillRect(pipes[0][0],pipes[0][1]+150,8,canvas.height-pipes[0][1]+150)
        ctx.fillRect(pipes[1][0],pipes[1][1]+150,8,canvas.height-pipes[1][1]+150)
        ctx.fillRect(pipes[0][0]+15,pipes[0][1]+150,3,canvas.height-pipes[0][1]+150)
        ctx.fillRect(pipes[1][0]+15,pipes[1][1]+150,3,canvas.height-pipes[1][1]+150)
        ctx.fillStyle = 'darkgreen'
        ctx.fillRect(pipes[0][0]+45,pipes[0][1]+150,5,canvas.height-pipes[0][1]+150)
        ctx.fillRect(pipes[1][0]+45,pipes[1][1]+150,5,canvas.height-pipes[1][1]+150)
        // move pipes
        pipes[0][0]=pipes[0][0]-1
        pipes[1][0]=pipes[1][0]-1
        if (pipes[0][0]==-50) {
            let newPipeHeight = Math.floor(Math.random()*100)+100
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