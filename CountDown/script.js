const enddate="20 march 2024 10:00 PM"
document.getElementById('end-date').innerHTML=enddate
const input=document.querySelectorAll('input')
const clock=()=>{
    const end=new Date(enddate)
    const now =new Date()
    const diff=(end-now)/1000
    if (diff<0){
        return
    }
    const days=Math.floor(diff/3600/24)
    const hours=Math.floor(diff/24/60%60)
    const min=Math.floor(diff/60%60)
    const sec=Math.floor(diff%60)
    input[0].value=days
    input[1].value=hours
    input[2].value=min
    input[3].value=sec

    
}
  setInterval( clock,1000)