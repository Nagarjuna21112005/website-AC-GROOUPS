
// Typewriter effect
const text = "Welcome to AC GROUPS";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// GSAP loader animation
window.addEventListener("load", () => {
    gsap.from(".logo", {duration: 1.5, scale: 0, ease: "bounce"});
    gsap.from(".cta", {duration: 1, y: 50, opacity: 0, delay: 1});
});

// Loader fade out
window.addEventListener("load", () => {
    document.querySelector(".loader-wrapper").style.display = "none";
});
