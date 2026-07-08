const fadeElements = document.querySelectorAll(
".card, .spot, .photo-card, .event"
);
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu-link");

window.addEventListener("scroll",()=>{

  let current = "";

  sections.forEach(section=>{
    const top = section.offsetTop - 150;

    if(scrollY >= top){
      current = section.id;
    }
  });


  menuLinks.forEach(link=>{
    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });

});
