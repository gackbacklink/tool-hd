let img = new Image()

const upload = document.getElementById("upload")
const preview = document.getElementById("preview")

upload.addEventListener("change",function(e){

const file = e.target.files[0]

if(!file) return

const reader = new FileReader()

reader.onload=function(event){

img.src=event.target.result
preview.src=img.src

}

reader.readAsDataURL(file)

})

function upscale(scale){

const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")

canvas.width=img.width*scale
canvas.height=img.height*scale

ctx.imageSmoothingEnabled=true
ctx.imageSmoothingQuality="high"

ctx.drawImage(img,0,0,canvas.width,canvas.height)

alert("Upscale selesai, silakan download")

}

function download(){

const canvas=document.getElementById("canvas")

const link=document.createElement("a")

link.download="upscaled-image.png"

link.href=canvas.toDataURL()

link.click()

}