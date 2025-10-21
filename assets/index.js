const shareButton = document.querySelector(".share__button");
const authorSectionSocial = document.querySelector(".author__section--social");
const authorSectionInfo = document.querySelector(".author__section--info");
const authorSection = document.querySelector(".author__section");

let isMobileAfterClick;

const isMobile = () => window.innerWidth <= 768;

const toggleShare = () => {
  isMobileAfterClick = isMobile();

  authorSectionSocial.classList.toggle("show");
  shareButton.classList.toggle("active");

  if (isMobile()) {
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

  // Check if the device type has changed after resizing
  const isMobileAfterResize = isMobile();
  let isMobileAfterLastResize = isMobileAfterClick;
  const clicked = authorSectionSocial.classList.contains("show");

  const isDifferentDeviceType = isMobileAfterResize !== isMobileAfterLastResize;

  // If the user clicked the share button and the device type has changed
  if (clicked && isDifferentDeviceType) {
    authorSectionInfo.classList.toggle("hide");
    authorSection.classList.toggle("dark-bg");
  }

  isMobileAfterClick = isMobileAfterResize;
});
