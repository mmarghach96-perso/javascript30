window.addEventListener("keydown", (event) => {
  // get the key code.
  const keyCode = event.keyCode;

  // get the audio related to key code.
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  // if audio not found return and quite the function.
  if (!audio) return;
  // else play the audio.
  audio.currentTime = 0;
  audio.play();

  // get target key and add playing class.
  const targetKey = document.querySelector(`div[data-key="${keyCode}"]`);
  targetKey.classList.add("playing");
});

// remove playing class after playing sound.
const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", (e) => {
    key.classList.remove("playing");
  })
);
