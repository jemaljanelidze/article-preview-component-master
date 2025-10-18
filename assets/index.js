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

shareButton.addEventListener("click", toggleShare);

let resizeTimer;

window.addEventListener("resize", () => {
  // Add a class to the body to disable all transitions
  document.body.classList.add("is-resizing");

  // Clear the previous timeout to reset the timer
  clearTimeout(resizeTimer);

  // Set a new timeout that will run after resizing has stopped
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("is-resizing");
  }, 250); // 250ms delay
});
