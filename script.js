document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.querySelector(".share-button");
  const socialIcons = document.querySelector(".social-icons");
  const authorBlock = document.querySelector(".author");

  if (!shareBtn || !socialIcons || !authorBlock) return;

  shareBtn.addEventListener("click", () => {
    socialIcons.classList.toggle("hidden");
    shareBtn.classList.toggle("active");
    authorBlock.classList.toggle("sharing");
  });
});
