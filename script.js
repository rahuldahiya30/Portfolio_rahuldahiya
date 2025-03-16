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
    let projectsContainer = document.querySelector(".carousel"); // ✅ FIXED class name
    let projectSection = document.querySelector("#projects"); // ✅ FIXED section selector
    let projects = document.querySelectorAll(".project-tile");

    let speed = 0; // Default speed (0 = no movement)
    let animation;

    // ✅ Mouse movement logic for controlling direction
    projectSection.addEventListener("mousemove", function (e) {
        let sectionWidth = projectSection.offsetWidth;
        let mouseX = e.clientX - projectSection.getBoundingClientRect().left;
        let centerX = sectionWidth / 2;
        console.log("Mouse moving:", speed);


        // ✅ Adjust speed based on cursor position
        if (mouseX > centerX + 50) {
            speed = (mouseX - centerX) / centerX * 20; // Move right
        } else if (mouseX < centerX - 50) {
            speed = -((centerX - mouseX) / centerX) * 20; // Move left
        } else {
            speed = 0; // Stop in center
        }

        // ✅ Apply movement animation
        if (animation) animation.kill(); // Stop previous animation
        animation = gsap.to(projectsContainer, {
            xPercent: speed, // ✅ Use xPercent for better effect
            duration: 1.5,
            ease: "power2.out"
        });
    });

    // ✅ Stop movement when mouse leaves
    projectSection.addEventListener("mouseleave", function () {
        if (animation) animation.kill(); // Stop animation
    });
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






