const controls = document.querySelectorAll(".controls_wrapper input");

const changeHandler = (event) => {
  const suffix = event.target.dataset.sizing || "";
  const name = event.target.name;
  const value = event.target.value;

  document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

controls.forEach((control) => {
  control.addEventListener("change", changeHandler);
});
