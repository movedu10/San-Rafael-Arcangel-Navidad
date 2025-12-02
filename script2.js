const starsContainer = document.getElementById('stars');
const numberOfStars = 100;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 40 + '%'; // solo en el 40% superior
    star.style.left = Math.random() * 100 + '%';
    const size = Math.random() * 2 + 1; 
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    starsContainer.appendChild(star);
}