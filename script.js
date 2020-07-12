const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const breateTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

BreatheAnimation();

function BreatheAnimation() {
  text.innerHTML = "Inhale";

  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Exhale";
      container.className = "container shrink";
    }, holdTime);
  }, breateTime);
}

setInterval(BreatheAnimation, totalTime);
