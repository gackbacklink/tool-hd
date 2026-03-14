
let img = new Image()

document.getElementById("upload").addEventListener("change", function(e){

const reader = new FileReader()

reader.onload = function(event){
img.src = event.target.result
document.getElementById("preview").src = img.src
}

reader.readAsDataURL(e.target.files[0])

})

function upscale(scale){

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = img.width * scale
canvas.height = img.height * scale

ctx.imageSmoothingEnabled = true
ctx.imageSmoothingQuality = "high"

ctx.drawImage(img,0,0,canvas.width,canvas.height)

}

function download(){

const canvas = document.getElementById("canvas")

const link = document.createElement("a")
link.download = "upscaled-image.png"
link.href = canvas.toDataURL()

link.click()

}
