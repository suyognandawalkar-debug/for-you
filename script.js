function moveButton() {
    const noBtn = document.getElementById('no-btn');
    // Limits movement within the viewport so it doesn't cause scrollbars
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.zIndex = "1000";
}

function celebrate() {
    const title = document.getElementById('main-title');
    const text = document.getElementById('sub-text');
    const heart = document.getElementById('heart-icon');
    const btnGroup = document.querySelector('.btn-group');

    title.innerHTML = "I Love You! ❤️";
    text.innerHTML = "You've made my day.<br>I promise to be better! 🌹";
    btnGroup.style.opacity = '0'; // Hide buttons smoothly
    setTimeout(() => btnGroup.style.display = 'none', 300);
    
    heart.innerText = "💖";
    heart.style.animation = "pulse 0.5s infinite";
    
    // Create the "Flower Sprinkle"
    for (let i = 0; i < 100; i++) {
        setTimeout(createFlower, i * 10);
    }
}

function createFlower() {
    const flower = document.createElement('div');
    const flowers = ['🌸', '🌹', '🌷', '🌻', '🌺', '✨', '❤️'];
    
    flower.style.position = 'fixed';
    flower.style.pointerEvents = 'none';
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.fontSize = (Math.random() * 25 + 15) + 'px';
    
    // Start from the dead center
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    
    flower.style.left = startX + 'px';
    flower.style.top = startY + 'px';
    flower.style.zIndex = "5000";
    
    document.body.appendChild(flower);

    // Explosion Effect
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 400 + 100;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    const animation = flower.animate([
        { transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${destX}px, ${destY}px) scale(1.5) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 2000 + 1500,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
        fill: 'forwards'
    });

    animation.onfinish = () => flower.remove();
}