
const text = "Project Redevelop By Seejan shakya";
let para = document.getElementById('para');
let lpx = 1;
function loopingInside(){
    para.innerText= text.slice(0,lpx);
    lpx++;
    if(text.length == lpx){
        lpx=1;
    }
    setTimeout(loopingInside,500);
}

window.addEventListener('click',()=>loopingInside());