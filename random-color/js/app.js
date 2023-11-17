const getcolor=()=>{
    const randomnumber= Math.floor( Math.random()*16777215)
    const randomcode="#"+randomnumber.toString(16);
   document.querySelector('.main').style.backgroundColor=randomcode;
}
document.getElementById('btn').addEventListener('click',getcolor)