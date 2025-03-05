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
});
