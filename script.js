const cursor = document.getElementById("cursor");
const tails = document.querySelectorAll(".tail");
const tailPositions = Array(tails.length).fill({ x: 0, y: 0 });

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  // تحديث موقع كل ذيل بشكل تدريجي لمتابعة حركة المؤشر
  for (let i = tails.length - 1; i >= 0; i--) {
    if (i === 0) {
      tailPositions[i] = { x: e.pageX, y: e.pageY };
    } else {
      tailPositions[i] = { x: tailPositions[i - 1].x, y: tailPositions[i - 1].y };
    }
    tails[i].style.left = tailPositions[i].x + "px";
    tails[i].style.top = tailPositions[i].y + "px";
  }
});