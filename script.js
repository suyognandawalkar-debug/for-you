function moveButton() {
    const noBtn = document.getElementById('no-btn');
    
    // Calculate random position within the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function celebrate() {
    const btnGroup = document.querySelector('.btn-group');
    const title = document.getElementById('main-title');
    const text = document.getElementById('sub-text');
    const heart = document.getElementById('heart-icon');

    // Haptic feedback for mobile users
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }

    title.innerText = "System Restored! ❤️";
    text.innerHTML = "You're the best. <br> I'm coming over with chocolate (or your favorite snack)!";
    btnGroup.style.display = 'none';
    heart.innerText = "💖";
    heart.style.animation = "pulse 0.5s infinite";

    // Confetti
    for (let i = 0; i < 70; i++) {
        setTimeout(createParticle, i * 20);
    }
}

// Particle function stays the same as before...