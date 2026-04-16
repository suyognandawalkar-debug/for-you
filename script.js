function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function celebrate() {
    const title = document.getElementById('main-title');
    const text = document.getElementById('sub-text');
    const heart = document.getElementById('heart-icon');
    const btnGroup = document.querySelector('.btn-group');

    title.innerHTML = "I Love You! ❤️";
    text.innerHTML = "You've made me the happiest person.<br>Can't wait to see your smile! 🌹";
    btnGroup.style.display = 'none';
    heart.innerText = "💖";
    
    // Create the "Sprinkle" explosion
    for (let i = 0; i < 100; i++) {
        createFlower();
    }
}

function createFlower() {
    const flower = document.createElement('div');
    const flowers = ['🌸', '🌹', '🌷', '🌻', '🌺', '✨'];
    
    flower.className = 'flower';
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    // Start from the middle of the screen
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    
    flower.style.left = startX + 'px';
    flower.style.top = startY + 'px';
    
    document.body.appendChild(flower);

    // Random direction and distance
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 12 + 5;
    const destinationX = Math.cos(angle) * (Math.random() * 300 + 100);
    const destinationY = Math.sin(angle) * (Math.random() * 300 + 100);

    // Animate using Keyframes or JS
    const animation = flower.animate([
        { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
        { transform: `translate(${destinationX}px, ${destinationY}px) scale(0) rotate(360deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 2000 + 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        fill: 'forwards'
    });

    animation.onfinish = () => flower.remove();
}