function celebrate() {
    const btn = document.getElementById('forgive-btn');
    const title = document.getElementById('main-title');
    const text = document.getElementById('sub-text');
    const heart = document.getElementById('heart-icon');

    // 1. Change the content
    title.innerText = "Yay! ❤️";
    text.innerHTML = "You just made my day. <br> I promise to make it up to you!";
    btn.style.display = 'none';
    heart.innerText = "💖";

    // 2. Create Confetti
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    const emojis = ['❤️', '✨', '🌸', '🎁', '🎈'];
    
    particle.className = 'confetti';
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '-20px';
    particle.style.animationDuration = (Math.random() * 2 + 1) + 's';
    
    document.body.appendChild(particle);
    
    // Clean up memory
    setTimeout(() => {
        particle.remove();
    }, 3000);
}