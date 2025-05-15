function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  x.classList.toggle("responsive");
}

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#about-me");
  const aboutLeft = document.querySelector(".about-left img");
  const aboutRight = document.querySelector(".about-right");

  function checkVisibility() {
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.75) {
      aboutSection.classList.add("about-visible");
    }

    if (rect.bottom < 0) {
      aboutLeft.classList.add("hide");
      aboutRight.classList.add("hide");
    } else {
      aboutLeft.classList.remove("hide");
      aboutRight.classList.remove("hide");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Run on page load in case the section is already visible

  // ✅ NEW CODE: Highlight active menu link on scroll
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150; // offset for fixed header
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});


