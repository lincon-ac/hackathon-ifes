export default function setPreference(valor1, valor2){
  const prefAcessibilidade = {
    acessibilidade: valor2
  }
  localStorage.setItem(valor1, JSON.stringify(prefAcessibilidade));
}