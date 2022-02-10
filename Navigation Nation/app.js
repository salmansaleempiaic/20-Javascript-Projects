const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navItems = document.querySelectorAll("nav ul li")
const toggleNav = () => {
    menuBars.classList.toggle("change")
    if(menuBars.classList.contains("change")){
        overlay.classList.replace("overlay-slide-left","overlay-slide-right")
        navItems.forEach((e,i)=>{
            e.classList.replace(`slide-out-${i+1}`,`slide-in-${i+1}`)
        })
    }
    else{
        overlay.classList.replace("overlay-slide-right","overlay-slide-left")
        navItems.forEach((e,i)=>{
            e.classList.replace(`slide-in-${i+1}`,`slide-out-${i+1}`)
        })
    }
}
navItems.forEach((e)=>{
    e.addEventListener("click",toggleNav)
})

menuBars.addEventListener("click",toggleNav);