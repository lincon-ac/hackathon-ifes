export default function initDropdown() {
  const btn = document.querySelector("[data-dropdown='abrir']");
  const eventos = ["click", "touchstart"];

  function handleDropdown(event) {
    event.preventDefault();
    const menu = document.querySelector(".dropdown-menu");
    console.log(menu);
    menu.classList.toggle("ativo");
  }

  eventos.forEach(evento => btn.addEventListener(evento, handleDropdown));
}
