const toogleShow = () =>{
    let navItem = document.querySelector(".navbar-link");
    navItem.classList.toggle("navbar-toggleShow");
  }

document.querySelector(".navbar-toggle").addEventListener("click",toogleShow);
