document.addEventListener('DOMContentLoaded', function () {
  const particleCount = 100;
  const particles = [];
  const container = document.getElementById('particles-container');

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticle() {
    const particle = {
      x: random(0, window.innerWidth),
      y: random(0, window.innerHeight),
      radius: random(1, 3),
      color: 'rgba(255, 255, 255, 0.8)',
      speedX: random(-0.5, 0.5),
      speedY: random(-0.5, 0.5),
    };
    particles.push(particle);
  }

  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }

  function drawParticles() {
    container.innerHTML = '';
    particles.forEach(particle => {
      const particleElem = document.createElement('div');
      particleElem.style.position = 'absolute';
      particleElem.style.width = `${particle.radius * 2}px`;
      particleElem.style.height = `${particle.radius * 2}px`;
      particleElem.style.backgroundColor = particle.color;
      particleElem.style.borderRadius = '50%';
      particleElem.style.left = `${particle.x}px`;
      particleElem.style.top = `${particle.y}px`;
      container.appendChild(particleElem);

      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.speedX = -particle.speedX;
      }
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.speedY = -particle.speedY;
      }
    });
  }

  function animateParticles() {
    drawParticles();
    requestAnimationFrame(animateParticles);
  }

  animateParticles();
});
