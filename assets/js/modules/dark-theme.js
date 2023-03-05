import setPreference from "./modules/set-preference.js";

export default function initDarkTheme() {
  const btnTheme = document.querySelector("[data-toggle-theme]");
  const body = document.body;
  
  try {
    const darkMode =
      JSON.parse(localStorage.getItem("dark-mode")).acessibilidade === "true";
  
    if (darkMode) {
      body.classList.add("dark-mode");
      changeImg();
    }
  } catch (error) {
    console.log(Error(error))
  }

  function changeImg(valor) {
    const imgBtn = btnTheme.querySelector("img");
    const imgIFES = document.querySelector("#ifes");
    const imgACTION = document.querySelector("#action");
    if (valor) {
      imgBtn.src = "./assets/img/dark-mode-night-moon-svgrepo-com.svg";

      imgIFES.src = "./assets/img/logo-ifes/ifes-horizontal-pb.png";

      imgACTION.src = "./assets/img/logo-action/horizontal-positiva.png";

    } else {
      imgBtn.src = "./assets/img/light-mode-svgrepo-com.svg";

      imgIFES.src = "./assets/img/logo-ifes/ifes-horizontal-branco.png";
      
      imgACTION.src = "./assets/img/logo-action/horizontal-negativa.png"
      
    }
  }

  function changeTheme() {
    const isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
      body.classList.remove("dark-mode");
      changeImg(isDarkMode);
      setPreference("dark-mode", "false");
    }

    if (!isDarkMode) {
      body.classList.add("dark-mode");
      changeImg();
      setPreference("dark-mode", "true");
    }
  }
  btnTheme.addEventListener("click", changeTheme);
}
