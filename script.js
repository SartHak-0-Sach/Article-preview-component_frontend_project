// Post Share 
let shareBtn = document.querySelector(".shareBtn");
shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("active");
    document.querySelector(".shareMenu").classList.toggle("active")
})