var percent = document.querySelector(".percent");
var btn = document.querySelector("button");
var loading = document.querySelector(".loading");

let grow = 0;
let click = 0;
btn.addEventListener("click", () => {
  if (click == 0) {
    var setting = setInterval(() => {
      grow++;
      percent.innerHTML = grow + "%";
      loading.style.width = grow + "%";
    }, 30);
    click = 1;
  }

  setTimeout(() => {
    clearInterval(setting);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.3;
  }, 3000);
});
