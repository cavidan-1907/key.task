let keys=document.querySelectorAll(".key");
let data=[]

keys.forEach(key=>{
    data.push(key.getAttribute('data-key'))
})
let rand=Math.floor(Math.random()*keys.length);
const randLetter=function(){
    keys.forEach(key=>{
        if(key.getAttribute('data-key')==data[rand]){
            key.classList.add('active')
        }
    })
}
window.onload=()=>randLetter();
let isWrong = false;
window.onkeydown = (e) => {
    keys.forEach(key => {
        if (key.classList.contains('active')) {
            if(e.key.toLowerCase() == key.getAttribute('data-key').toLowerCase()){
                isWrong = false;
                keys.forEach(key => key.classList.remove('active'));
                rand = Math.floor(Math.random() * keys.length);
                randLetter();
            }
        }
        else{
            if(e.key.toLowerCase() == key.getAttribute('data-key').toLowerCase()){
               key.classList.add('false')
               setInterval(() => {
                key.classList.remove('false')
               }, 1000);
            }
        }
    })
}



