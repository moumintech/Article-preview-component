// script.js
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".share-button");
  const socialIcons = document.querySelector(".social-icons");

  if (!shareBtn || !socialIcons) return;

  shareBtn.addEventListener("click", () => {
    socialIcons.classList.toggle("hidden");
    shareBtn.classList.toggle("active");
  });
});
