const shareButton = document.querySelector(".share__button");
const authorSectionSocial = document.querySelector(".author__section--social");
const authorSectionInfo = document.querySelector(".author__section--info");
const authorSection = document.querySelector(".author__section");

const toggleShare = () => {
  const isMobile = window.innerWidth <= 768;

  authorSectionSocial.classList.toggle("show");
  shareButton.classList.toggle("active");

  if (isMobile) {
    authorSectionInfo.classList.toggle("hide");
    authorSection.classList.toggle("dark-bg");
  }
};

const resetState = () => {
  authorSectionSocial.classList.remove("show");
  authorSectionInfo.classList.remove("hide");
  shareButton.classList.remove("active");
  authorSection.classList.remove("dark-bg");
};

shareButton.addEventListener("click", toggleShare);

window.addEventListener("resize", resetState);
