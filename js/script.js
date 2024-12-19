var typed = new Typed(".typing", {
    strings:["^2000", "Creator.", "Web Developer.", "Musician.", "Back End Dev.", "Full Stack Developer."],
    typeSpeed:40,
    backSpeed:20,
    loop:false
});

document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.getElementById("intro-section");
    const mainContent = document.getElementById("main-content");
    const chevronBtn = document.querySelector("#chevron");
    const checkbox = document.querySelector(".hamburger input");
    const navList = document.querySelector("#nav-list");
    window.addEventListener("click", ()=> {
      mainContent.classList.add("show");
      introSection.style.display = "none";
    })
    window.addEventListener("wheel", ()=> {
      mainContent.classList.add("show");
      introSection.style.display = "none";
    })
    checkbox.addEventListener("change", ()=> {
      if (checkbox.checked) {
        navList.classList.add("show");
      }
      else {
        navList.classList.remove("show");
      }
    })
    
      

    chevronBtn.addEventListener("click", () => {
    introSection.style.display = "none"; // Hide the intro section
    mainContent.classList.add("show"); // Reveal the main content
    document.body.classList.remove("no-scroll");
    });
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add 'active' to the visible section
              entry.target.classList.add("active");
    
              // Remove 'active' from all other sections
              sections.forEach((section) => {
                if (section !== entry.target) {
                  section.classList.remove("active");
                }
              });
            }
          });
        },
        { threshold: 0.5 }
      );
    
      // Observe each section
      sections.forEach((section) => observer.observe(section));
    
});