const loading = document.querySelector(".loading");
const bg = document.querySelector(".bg");

let procent = 0;

const changeBlur = () => {
  procent++;
  if (procent === 100) {
    clearInterval(interval);
  }
  loading.textContent = `${procent}%`;
  bg.style.filter = `blur(${scale(procent, 0, 100, 30, 0)}px)`;
};

let interval = setInterval(changeBlur, 30);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
