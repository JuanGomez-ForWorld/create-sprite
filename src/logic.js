import dato from "./datos.js"


function update() {
    const canvas = document.querySelector(".canvas");
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect();
    const grid = []
    let activar = false
    let posX, posY, posW, posH



    function cuadricula() {
        for (let h = 0; h < (canvas.height + 10) / 10; h++) {
            grid.push([])
            for (let i = 0; i < (canvas.width + 10) / 10; i++) {
                grid[grid.length - 1].push([i * 10, h])
            }
        }
    }
    cuadricula()

    function trazo(e) {
        posX = e.clientX.toFixed() - rect.left.toFixed() 
        posY = e.clientY.toFixed() - rect.top.toFixed()
        posW = ((posX -6 )/ 10).toFixed()
        posH = ((posY -6 )/ 10).toFixed()
        
        if (dato.tool === "lapiz") {
            draw(grid[posH][posW][0], grid[posH][posW][1]*10) 
        } else if(dato.tool === "borra"){
            ctx.clearRect(grid[posH][posW][0], grid[posH][posW][1]*10, 10, 10)
        }
        
    }

    canvas.addEventListener("mousedown", (e) => {
        activar = true
        trazo(e)
    })

    canvas.addEventListener("mousemove", (e) => {
        if (activar === true) {
            trazo(e)
        }
    })

    canvas.addEventListener("mouseup", (e) => {
        activar = false
    })

    function draw(posx, posy) {
        ctx.fillStyle = dato.color
        ctx.fillRect(posx, posy, 10, 10)
    }

}


export default update;