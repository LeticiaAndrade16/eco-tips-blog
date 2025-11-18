
window.onload = () => {
  console.log("Site EcoTips carregado!");
};


const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = "❤️ Curtido!";
  });
});
