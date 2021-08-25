// console.log(document.getElementById('idone'));

// const myElement = document.querySelectorAll('p')
// myElement.forEach((p)=>{
//     p.textContent='i am being change useing js'
//     // p.remove()
// })


const mynewPara = document.createElement('p')
mynewPara.textContent= 'i was add via js'

document.querySelector('body').appendChild(mynewPara)

// document.querySelector('button').addEventListener('click',(event)=>{
//    event.target.textContent='i was clicked'
// })

document.querySelector('#myform').addEventListener('input',(event) =>{
    console.log(event.target.value);
})

const change=()=>{
newpara=document.querySelector('#idone')
newpara.textContent='i was change throw button'
}
