/*Smooth webpage*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});



/*navbar*/
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});





/*Home Pageeeee*/
const textElement = document.getElementById("typewriter-text");
const texts = ["Hi, I'm Rahul Dahiya – IT Analyst | Career Advisor"];
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1500;

function typeText() {
    if (charIndex < texts[0].length) {
        textElement.innerHTML += texts[0].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.classList.add("fade");
        textElement.innerHTML = texts[0].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textElement.classList.remove("fade");
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
});

/*Projectssssss*/
document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1 },
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 100 },
                push: { particles_nb: 4 },
            },
        },
    });
});


  
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-card");

    function checkScroll() {
        projects.forEach((project) => {
            const rect = project.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                project.style.opacity = "1";
                project.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});



/*certifications*/
document.addEventListener("DOMContentLoaded", function () {
    const certificationSection = document.querySelector(".certification-section");

    for (let i = 0; i < 15; i++) {
        let spark = document.createElement("div");
        spark.classList.add("spark");

        // Random position
        let randomX = Math.random() * 100;
        let randomY = Math.random() * 100;
        let delay = Math.random() * 3;

        spark.style.left = `${randomX}%`;
        spark.style.top = `${randomY}%`;
        spark.style.animationDelay = `${delay}s`;

        certificationSection.appendChild(spark);
    }
});


function toggleCard(card) {
    card.classList.toggle("active");
}
/*education*/
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create Stars
    let stars = [];
    let numStars = 200; // Increased for a denser effect

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.8 + 0.2, // Smaller stars for better effect
            speed: Math.random() * 0.7 + 0.3,
            alpha: Math.random() * 0.5 + 0.5, // Twinkle effect
            flicker: Math.random() * 0.05 + 0.02
        });
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();

            // Move Stars Down
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }

            // Twinkling effect
            star.alpha += (Math.random() - 0.5) * star.flicker;
            star.alpha = Math.max(0.3, Math.min(1, star.alpha));
        });

        requestAnimationFrame(animateStars);
    }

    animateStars();
});

/*floating bar */
let lastScrollY = window.scrollY;
const contactBar = document.getElementById("contact-bar");

window.addEventListener("scroll", function () {
    if (window.scrollY > lastScrollY) {
        contactBar.style.bottom = "20px"; // Show on scroll down
    } else {
        contactBar.style.bottom = "-70px"; // Hide on scroll up
    }
    lastScrollY = window.scrollY;
});






