const scorpion = document.getElementById('scorpion');
let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let mouse = { x: pos.x, y: pos.y };

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
   
    x += dx * 0.05;
    y += dy * 0.05;
   
    scorpio.style.left = `${x}px`;
    scorpio.style.top = `${y}px`;

  scorpio.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

});