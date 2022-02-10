const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navItems = document.querySelectorAll("nav ul li")
const toggleNav = () => {
    menuBars.classList.toggle("change")
    if(menuBars.classList.contains("change")){
        // overlay.classList.remove("overlay-slide-left")
        // overlay.classList.add("overlay-slide-right")
        overlay.classList.replace("overlay-slide-left","overlay-slide-right")
        navItems.forEach((e,i)=>{
            console.log(e,`slide-out-${i+1}`,`slide-in-${i+1}`)
            // e.classList.remove(`slide-out-${i+1}`)
            // e.classList.add(`slide-in-${i+1}`)
            e.classList.replace(`slide-out-${i+1}`,`slide-in-${i+1}`)
        })
    }
    else{
        // overlay.classList.remove("overlay-slide-right")
        // overlay.classList.add("overlay-slide-left")
        overlay.classList.replace("overlay-slide-right","overlay-slide-left")
        navItems.forEach((e,i)=>{
            // e.classList.remove(`slide-in-${i+1}`)
            // e.classList.add(`slide-out-${i+1}`)
            e.classList.replace(`slide-in-${i+1}`,`slide-out-${i+1}`)
        })
    }
}
navItems.forEach((e)=>{
    e.addEventListener("click",toggleNav)
})

menuBars.addEventListener("click",toggleNav);