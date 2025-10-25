const shareButton = document.querySelector(".share__button");
const authorSectionSocial = document.querySelector(".author__section--social");
const authorSectionInfo = document.querySelector(".author__section--info");
const authorSection = document.querySelector(".author__section");

let wasMobile = false;

const isMobile = () => window.innerWidth <= 768;

const toggleMobileLayout = () => {
  authorSectionSocial.classList.toggle("animate");
  authorSectionInfo.classList.toggle("hide");
  authorSection.classList.toggle("dark-bg");
};

const toggleShare = () => {
  authorSectionSocial.classList.toggle("hide");
  shareButton.classList.toggle("active");

  if (isMobile()) {
    toggleMobileLayout();
    wasMobile = true; // Update the state for mobile
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
  const isNowMobile = isMobile();
  const isShareOpen = !authorSectionSocial.classList.contains("hide");

  const deviceTypeChanged = isNowMobile !== wasMobile;

  // If the user clicked the share button and the device type has changed
  if (isShareOpen && deviceTypeChanged) toggleMobileLayout();

  wasMobile = isNowMobile; // Update the state for the next event
});
