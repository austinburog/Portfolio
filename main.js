let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
let infos= ['A person who loves watching anime', 'Additional to this is that he also love playing computer games like', 'Lol, Dota and Valorant.'];
let textIndex=0;
let infoIndex=0;

function type(){
    const text = infos[textIndex];
    const currentText = text.substring(0,infoIndex);
    document.querySelector('.additional-info').textContent = currentText;
    infoIndex++;

    if(infoIndex > text.length){
        infoIndex= 0;
        textIndex++;
        if(textIndex >= infos.length){
            textIndex =0;
        }
    }
}
setInterval(type,100);
