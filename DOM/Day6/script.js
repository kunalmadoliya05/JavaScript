var arr = [
  {
    dp: "https://images.unsplash.com/photo-1742134515731-2297f26a3426?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D ",
    story:
      "https://plus.unsplash.com/premium_photo-1742318713509-d325930b6749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    dp: "https://images.unsplash.com/photo-1741800465167-0c276ad75e08?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D ",
    story:
      " https://images.unsplash.com/photo-1741851373559-6879db14fd8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1741732311591-18ddbd0964cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D ",
    story:
      "https://images.unsplash.com/photo-1741850821836-a0228e561406?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    dp: "https://images.unsplash.com/photo-1742183635099-bf6d03fca5c7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D ",
    story:
      "https://plus.unsplash.com/premium_photo-1665675241676-28dbc3a758df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    dp: "https://images.unsplash.com/photo-1742144897654-5fb5b98dd73e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D ",
    story:
      "https://images.unsplash.com/photo-1742201934199-750a39f4c277?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D ",
  },
];

let stry = document.querySelector(".story");
let fullScreen = document.querySelector(".full-screen")

let cluter = " ";
arr.forEach((elem, idx) => {
  cluter += ` <div class="story-box">
            <img id="${idx}" src="${elem.dp}" alt="#" />
          </div>`;
});

stry.innerHTML = cluter

stry.addEventListener("click" , (dets)=>{
   
 fullScreen.style.display = "block"
 fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`


 setTimeout(()=>{
 fullScreen.style.display = "none"
 },3000)
    
})