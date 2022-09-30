const buttonFirstBez=document.querySelector(".tactical-right-buttons-1etbez")
const buttonFirstS=document.querySelector(".tactical-right-buttons-1ets")
const buttonSecond=document.querySelector(".tactical-right-buttons-2et")

const firstBez=document.querySelector(".tactical-left-img1")
const firstS=document.querySelector(".tactical-left-img2")
const second=document.querySelector(".tactical-left-img3")



buttonFirstBez.addEventListener("click", ()=>{
    if(!firstBez.classList.contains("active-img")){
        firstBez.classList.add("active-img")
        firstS.classList.remove("active-img")
        second.classList.remove("active-img")

        buttonFirstBez.classList.add("active-button")
        buttonFirstS.classList.remove("active-button")
        buttonSecond.classList.remove("active-button")
    }
})

buttonFirstS.addEventListener("click", ()=>{
    if(!firstS.classList.contains("active-img")){
        firstS.classList.add("active-img")
        firstBez.classList.remove("active-img")
        second.classList.remove("active-img")

        buttonFirstS.classList.add("active-button")
        buttonFirstBez.classList.remove("active-button")
        buttonSecond.classList.remove("active-button")
    }
})

buttonSecond.addEventListener("click", ()=>{
    if(!second.classList.contains("active-img")){
        second.classList.add("active-img")
        firstBez.classList.remove("active-img")
        firstS.classList.remove("active-img")

        buttonFirstS.classList.remove("active-button")
        buttonFirstBez.classList.remove("active-button")
        buttonSecond.classList.add("active-button")
    }
})
