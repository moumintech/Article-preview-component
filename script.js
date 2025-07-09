const shareBtn = document.querySelector(".share-btn");
const socialIcons = document.querySelector(".social-icons");
shareBtn.addEventListener("click", () => {
  socialIcons.classList.toggle("active");
  shareBtn.classList.toggle("active");
});
