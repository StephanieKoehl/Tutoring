function addFact() {
  const container = document.getElementById("factContainer");
  const p = document.createElement("p");
  p.textContent = "This site was made with HTML, CSS, and JavaScript!";
  container.appendChild(p);
}
