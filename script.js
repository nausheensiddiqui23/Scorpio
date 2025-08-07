const cursor = document.getElementById("cursor");
const tails = document.querySelectorAll(".tail");
const tailPositions = Array(tails.length).fill({ x: 0, y: 0 });

document.addEventListener("mousemove", (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  // move the whole scorpion cursor
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

  // rotate to point toward movement
  const angle = Math.atan2(mouseY - tailPositions[0].y, mouseX - tailPositions[0].x) * 180 / Math.PI;
  cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  // tail movement
  for (let i = tails.length - 1; i >= 0; i--) {
    if (i === 0) {
      tailPositions[i] = { x: mouseX, y: mouseY };
    } else {
      tailPositions[i] = { x: tailPositions[i - 1].x, y: tailPositions[i - 1].y };
    }
    tails[i].style.left = tailPositions[i].x + "px";
    tails[i].style.top = tailPositions[i].y + "px";
  }
});
