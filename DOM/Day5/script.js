var elem = document.querySelectorAll(".elem");
var img = document.querySelector("img");

elem.forEach((val) => {
  val.addEventListener("mousemove", (dets) => {
    val.childNodes[3].style.left = dets.x + "px";
    val.childNodes[3].style.top = dets.y + "px";
  });

  val.addEventListener("mouseenter", (dets) => {
    
     val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", (dets) => {
   
    val.childNodes[3].style.opacity = 0;
  });
});
