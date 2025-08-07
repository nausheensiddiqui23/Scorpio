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
  
  
  const dx = mouse.x - pos.x;
  const dy = mouse.y - pos.y;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
   
   scorpion.style.left = `${pos.x}px`;
  scorpion.style.top = `${pos.y}px`;
  scorpion.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

});