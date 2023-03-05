export default function initScrollSuave(){
  const btnsScroll = document.querySelectorAll("a[href^='#']");
  
  function handleClick(event){
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const scrollItem = document.querySelector(href)
    const top = scrollItem.offsetTop - 70
    console.log(href)
    console.log(href, top)
    scroll({
      top: top,
      behavior: "smooth"
    });
  }

  btnsScroll.forEach(btn => btn.addEventListener("click", handleClick));

}