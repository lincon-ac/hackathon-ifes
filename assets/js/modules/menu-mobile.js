export default function initMenuMobile(){
  const btn = document.querySelector("[data-menu='abrir']");

  function handleTouch() {
    const menu = document.querySelector(".menu");
    console.log(menu);
    btn.classList.toggle("ativo");
    menu.classList.toggle("ativo");
  }

  btn.addEventListener("click", handleTouch);
}