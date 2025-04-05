var change = document.querySelector(".here");
var btn = document.querySelector("button");

let count = 0;
btn.addEventListener("click", () => {
  if (count == 1) {
    change.innerHTML = "Friends";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "red";
    count = 0;
  } else {
    change.innerHTML = "Stranger";
    btn.innerHTML = "Add friend";
    btn.style.backgroundColor = "green";
    count = 1;
  }
});
