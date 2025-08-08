const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const segments = 40;
const segmentLength = 15;
const tail = [];
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

for (let i = 0; i < segments; i++) {
  tail.push({ x: mouse.x, y: mouse.y });
}

document.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function updateTail() {
  tail[0].x += (mouse.x - tail[0].x) * 0.2;
  tail[0].y += (mouse.y - tail[0].y) * 0.2;
  for (let i = 1; i < segments; i++) {
    const dx = tail[i - 1].x - tail[i].x;
    const dy = tail[i - 1].y - tail[i].y;
    const angle = Math.atan2(dy, dx);
    tail[i].x = tail[i - 1].x - Math.cos(angle) * segmentLength;
    tail[i].y = tail[i - 1].y - Math.sin(angle) * segmentLength;
  }
}

function drawTail() {
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  for (let i =
