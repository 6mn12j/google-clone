const menu_modal = document.querySelector("menu-modal");
const openMenuButton = document.getElementById("open-menu-button");

const openModal = () =>{
    menu_modal.classList.remove("hidden");
}

openMenuButton.addEventListener("click",openModal);
