let eyetxt = document.getElementById("eyetxt")
let eye = document.getElementById("eye")
let pss = getElementById("Pwdin")
eye.addEventListener("click",Password)
txt = eyetxt.innerText()

if (txt == "visibility"){
    pss.type="text"
    eyetxt.innerText="visibility_off"
}
else{
    pss.type="password"
    eyetxt.innerText="visibility"
}