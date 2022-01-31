const menuIcon = document.querySelector(".fa-bars");
closeIcon = document.querySelector(".fa-times");
menuBar = document.querySelector("nav .container ul");

menuIcon.addEventListener("click", () =>{
    menuBar.style.display="block";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
})
closeIcon.addEventListener("click", () =>{
    menuBar.style.display="none";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
})

const removeClass = () => {
    menuBar.querySelectorAll("li a").forEach(element => {
        element.classList.remove("active")

    });
} 

menuBar.querySelectorAll("li a").forEach(element => {
    element.addEventListener("click", () => {
            removeClass()
            element.classList.add("active");

    })
});