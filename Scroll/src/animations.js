
export function initCountUp() {
  const countElements = document.querySelectorAll('.count-up');
  
  const animateCount = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCount = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target;
      }
    };
    
    updateCount();
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCount(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  countElements.forEach(el => observer.observe(el));
}

export function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

export function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

export function initTiltCards() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

export function initCursorTrail() {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll('.cursor-circle');
  
  if (circles.length === 0) {
    for (let i = 0; i < 20; i++) {
      const circle = document.createElement('div');
      circle.className = 'cursor-circle';
      circle.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(247, 198, 81, 0.3);
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
      `;
      document.body.appendChild(circle);
    }
  }
  
  const updatedCircles = document.querySelectorAll('.cursor-circle');
  
  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    updatedCircles.forEach((circle, index) => {
      circle.style.left = x - 5 + 'px';
      circle.style.top = y - 5 + 'px';
      circle.style.transform = `scale(${(updatedCircles.length - index) / updatedCircles.length})`;
      
      const nextCircle = updatedCircles[index + 1] || updatedCircles[0];
      x += (parseInt(nextCircle.style.left || 0) - x) * 0.3;
      y += (parseInt(nextCircle.style.top || 0) - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
}

export function initTextScramble() {
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => this.resolve = resolve);
      this.queue = [];
      
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    
    update() {
      let output = '';
      let complete = 0;
      
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="scramble">${char}</span>`;
        } else {
          output += from;
        }
      }
      
      this.el.innerHTML = output;
      
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  
  const scrambleElements = document.querySelectorAll('.scramble-text');
  scrambleElements.forEach(el => {
    const fx = new TextScramble(el);
    const text = el.textContent;
    fx.setText(text);
  });
}

export function initAllAnimations() {
  initCountUp();
  initMagneticButtons();
  initParallax();
  initTiltCards();
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initAllAnimations);
}
