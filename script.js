const scorpion = document.getElementById('scorpion');
let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let mouse = { x: pos.x, y: pos.y };

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  pos.x += (mouse.x - pos.x) * 0.1;
  pos.y += (mouse.y - pos.y) * 0.1;   
    x += dx * 0.05;
    y += dy * 0.05;
   
    scorpio.style.left = `${x}px`;
    scorpio.style.top = `${y}px`;

  scorpio.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

});