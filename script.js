const scorpio = document.getElementById('scorpio');
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

document.addEventListener('mousemove', (e) =>{
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
   
    x += dx * 0.05;
    y += dy * 0.05;
   
    scorpio.style.left = `${x}px`;
    scorpio.style.top = `${y}px`;


});