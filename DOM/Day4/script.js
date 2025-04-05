var box = document.querySelector(".container")
var crsr = document.querySelector(".cursor")


box.addEventListener("mousemove" , (dets)=>{
    crsr.style.left = dets.x +"px"
    crsr.style.top =dets.y +"px"
    
})