var typed = new Typed(".typing", {
    strings:["","web developer.", "student.", "web designer.", "back end dev.", "Full Stack Developer."],
    typeSpeed:50,
    backSpeed:30,
    loop:false
});
document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.getElementById("intro-section");
    const mainContent = document.getElementById("main-content");
    const chevronBtn = document.querySelector("#chevron");

    // Listen for a click on the page
    setTimeout(() => {
        chevronBtn.addEventListener("click", () => {
        introSection.style.display = "none"; // Hide the intro section
        mainContent.style.display = "contents"; // Reveal the main content
    });
    }, 3000);
});