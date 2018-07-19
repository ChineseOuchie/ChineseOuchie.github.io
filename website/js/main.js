document.addEventListener("DOMContentLoaded", function(){
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");
    
    navToggle.addEventListener("click", function(){
        mainNav.classList.toggle("navToggle")
    })
    
})