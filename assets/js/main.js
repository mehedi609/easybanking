// const hamburgerBtn = document.getElementById("hamburger-menu");
// const overlay = document.getElementsByClassName("overlay");
//
// hamburgerBtn.addEventListener("click", () => {
//   if (hamburgerBtn.classList.contains("open")) {
//     hamburgerBtn.classList.remove("open");
//     overlay.classList.add();
//   } else {
//     hamburgerBtn.classList.add("open");
//   }
// });

$(document).ready(function () {
  const hamburgerBtn = $("#hamburger-menu");
  const overlay = $(".overlay");

  hamburgerBtn.click(function () {
    if (hamburgerBtn.hasClass("open")) {
      // menu close
      hamburgerBtn.removeClass("open");
      overlay.removeClass("fade-in").addClass("fade-out");
    } else {
      // menu open
      hamburgerBtn.addClass("open");
      overlay.removeClass("fade-out").addClass("fade-in");
    }
  });
});
