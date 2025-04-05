var btn = document.querySelector("button");
var body = document.querySelector("body");
let arr = ["panda1.png", "panda2.png", "panda3.png"];
let index = 0;

btn.addEventListener("click", () => {
  var img = document.createElement("img");
  img.setAttribute("src", arr[index]);

  var x = Math.random() * 100;
  var y = Math.random() * 100;

  img.style.height = "150px";
  img.style.position = "absolute";

  img.style.top = x + "%";
  img.style.left = y + "%";

  body.appendChild(img);

  index = (index + 1) % arr.length
});
