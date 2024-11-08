// Selecting the parallax layers and text elements
const layer1 = document.querySelector('.layer1');
const layer2 = document.querySelector('.layer2');
const layer3 = document.querySelector('.layer3');

const text1 = document.querySelector('#section1 .parallax-text');
const text2 = document.querySelector('#section2 .parallax-text');
const text3 = document.querySelector('#section3 .parallax-text');

// Function to apply parallax effect
function parallaxEffect() {
    const scrollY = window.pageYOffset;

    // Adjust each layer's transform based on the scroll position
    // and move the text overlays in sync with their respective images
    if (scrollY < window.innerHeight) {
        layer1.style.transform = `translateY(${scrollY * 0.2}px)`;
        text1.style.transform = `translateY(${scrollY * 0.1}px)`;
    } else if (scrollY < 2 * window.innerHeight) {
        layer2.style.transform = `translateY(${(scrollY - window.innerHeight) * 0.2}px)`;
        text2.style.transform = `translateY(${(scrollY - window.innerHeight) * 0.1}px)`;
    } else {
        layer3.style.transform = `translateY(${(scrollY - 2 * window.innerHeight) * 0.2}px)`;
        text3.style.transform = `translateY(${(scrollY - 2 * window.innerHeight) * 0.1}px)`;
    }
}

// Optimizing performance with requestAnimationFrame
function scrollHandler() {
    requestAnimationFrame(parallaxEffect);
}

// Event listener for scroll
window.addEventListener('scroll', scrollHandler);
