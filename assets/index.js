const shareButton = document.querySelector(".share__button");
const authorSectionSocial = document.querySelector(".author__section--social");
const authorSectionInfo = document.querySelector(".author__section--info");
const authorSection = document.querySelector(".author__section");

shareButton.addEventListener("click", () => {
  authorSectionSocial.classList.toggle("show");
  authorSectionInfo.classList.toggle("hide");
  shareButton.classList.toggle("active");
  authorSection.classList.toggle("dark-bg");
});
