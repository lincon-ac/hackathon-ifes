export default function initAccordion() {
  const btns = document.querySelectorAll("[data-accordion]");

  function handleClick() {
    const element = this.nextElementSibling;
    this.classList.toggle("ativo");
    element.classList.toggle("ativo");
  }

  btns.forEach(btn => btn.addEventListener("click", handleClick));
}
