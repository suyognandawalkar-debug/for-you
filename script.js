function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function celebrate() {
    const app = document.getElementById('app');
    const title = document.getElementById('main-title');
    const text = document.getElementById('sub-text');
    const heart = document.getElementById('heart-icon');
    const btnGroup = document.querySelector('.btn-group');

    // Add shake effect to the whole container
    app.classList.add('shake');

    // Change Content with a slight delay
    setTimeout(() => {
        title.innerHTML = "I Love You! ❤️";
        title.style.fontSize = "4rem";
        text.innerHTML = "Thank you for being so patient with me.<br>I can't wait to see you! 🌹";
        btnGroup.style.display = 'none';
        heart.innerText = "💖";
        heart.style.animation = "pulse 0.4s infinite";
        
        // Burst of confetti
        for (let i = 0; i < 100; i++) {
            createParticle();
        }
    }, 300);
}

function createParticle() {
    const particle = document.createElement('div');
    const emojis = ['❤️', '💖', '✨', '🌹', '🦋'];
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '-20px';
    particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    particle.style.zIndex = '1000';
    particle.style.transition = 'transform 3s linear, opacity 3s';
    
    document.body.appendChild(particle);

    // Animate falling
    setTimeout(() => {
        particle.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        particle.style.opacity = '0';
    }, 100);

    setTimeout(() => { particle.remove(); }, 3000);
}