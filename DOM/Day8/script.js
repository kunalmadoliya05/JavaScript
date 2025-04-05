var btn = document.querySelector("button");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");

btn.addEventListener("click", () => {
  var img1Src = img1.getAttribute("src");
  var img2Src = img2.getAttribute("src");

  img1.setAttribute("src", img2Src);
  img2.setAttribute("src", img1Src);
});
