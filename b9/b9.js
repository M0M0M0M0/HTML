const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtns = [document.getElementById("closeModal"), document.getElementById("closeModal2")];

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtns.forEach(btn =>
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  })
);
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";


  const modalBox = modal.querySelector(".modal");
  modalBox.style.animation = "none";
  modalBox.offsetHeight; 
  modalBox.style.animation = "jelly 0.5s ease";
});
