var feet=document.getElementById('feet')
var inch=document.getElementById('inch')
feet.addEventListener('input',(e)=>{
  
let f=e.target.value
let i=f*12
inch.value=i;
})