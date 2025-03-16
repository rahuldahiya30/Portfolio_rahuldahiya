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
function toggleCard(card) {
    card.classList.toggle("active");
}
/*education*/
document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", function () {
        this.querySelector(".flip-card-inner").classList.toggle("flipped");
    });
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






