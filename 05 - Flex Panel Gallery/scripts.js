const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", (event) => {
    panel.classList.add("open");
  });

  panel.addEventListener("mouseout", (event) => {
    panel.classList.remove("open");
  });
});
