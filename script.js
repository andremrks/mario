const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.querySelector(".gameOver");
const playAgain = document.querySelector(".playAgain");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 130 && pipePosition > 0 && marioPosition <= 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./images/lose.png";
    mario.style.width = "85px";
    mario.style.marginLeft = "45px";

    gameOver.style.visibility = "visible";
    playAgain.style.visibility = "visible";
  }
}, 10);

playAgain.addEventListener("click", () => {
  window.location.reload();
});

document.addEventListener("keydown", jump);
