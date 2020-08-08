const menuModal = document.querySelector(".menu-modal");
const overlay = document.querySelector(".modal-overlay");
const openMenuButton = document.getElementById("open-menu-button");


const openModal = () =>{
    menuModal.classList.remove("hidden");
}
const closeModal = ()=>{
    menuModal.classList.add("hidden");
}

openMenuButton.addEventListener("click",openModal);
overlay.addEventListener("click",closeModal);


