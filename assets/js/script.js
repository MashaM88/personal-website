document.addEventListener("DOMContentLoaded", function () {
    // Dynamic greeting based on time of day
    function updateGreeting() {
        const greetingElement = document.getElementById("greeting");
        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) {
            greeting = "Good Morning!";
        } else if (hour < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }
        greetingElement.textContent = greeting;
    }
    updateGreeting();

    // Porsche image slideshow
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active-slide");
            if (i === index) {
                slide.classList.add("active-slide");
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Ensure "Welcome to My Portfolio" remains visible
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.position = "absolute";
    heroContent.style.top = "50%";
    heroContent.style.left = "50%";
    heroContent.style.transform = "translate(-50%, -50%)";
    heroContent.style.zIndex = "10";
    heroContent.style.textAlign = "center";

    // Dark mode toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
    
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});
