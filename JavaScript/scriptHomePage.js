const images = [];
for (let i = 1; i <= 85; i++) {
    images.push(`images/backg/bgIS${i}.jpg`);
}

let currentIndex = 0;
const section = document.getElementById('background-section');

function changeBackground() {
    section.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3500); 
changeBackground();
