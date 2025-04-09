let body = document.querySelector("body");
let toggleBtn = document.querySelector(".toggle-btn");
let listItems = document.querySelectorAll(".list");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("Dark-mode");

  const isMode = body.classList.contains("Dark-mode");

  toggleBtn.innerHTML = isMode
    ? `<i class="ri-sun-line"></i> Light`
    : `<i class="ri-moon-line"></i> Dark`;

  listItems.forEach((item) => {
    if (isMode) {
      item.style.backgroundColor = "rgb(0, 0, 0)";
      item.style.color = "rgb(242, 242, 231)";
    } else {
      item.style.backgroundColor = "rgb(242, 242, 231)";
      item.style.color = "black";
    }
  });
});
