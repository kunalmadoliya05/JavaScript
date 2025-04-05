var main = document.querySelector(".main");
var like = document.querySelector(".heart");
var mainHeart = document.querySelector(".main-heart");

main.addEventListener("dblclick", () => {
  mainHeart.style.transform = "translate(-50%,-50%) scale(5)"
  mainHeart.style.opacity = 0.8

  setTimeout(() => {
    mainHeart.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1000);

  console.log("hi");
});

like.addEventListener("click", () => {
  like.style.color = "red";
});
