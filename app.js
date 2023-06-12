const sidebar=document.querySelector(".sidebar")
const btn=document.querySelector(".bars")
let onclic=false
const OnOff=()=>{
    if(onclic===false){
        sidebar.style.transform="translateX(-5%)"
        btn.style.transform="translateX(0)"
        onclic=true
    }else{
        sidebar.style.transform = "translateX(-1000px)"
        btn.style.transform = "translateX(0px)"
        onclic=false
    }
}