const scorpion = document.getElementById("scorpion");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let targetX = x;
let targetY = y;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animate() {
  const dx = targetX - x;
  const dy = targetY - y;

  x += dx * 0.1;
  y += dy * 0.1;

  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  scorpion.style.left = `${x}px`;
  scorpion.style.top = `${y}px`;
  scorpion.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  requestAnimationFrame(animate);
}

animate();
