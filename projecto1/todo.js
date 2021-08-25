// var h =document.createElement('h1')
// var myvalue = document.createTextNode('hello world')
// h.appendChild(myvalue)

// document.querySelector('h1').appendChild(h)

// var val = 5;
// while(val>0){
//     console.log(val);
//     val--;
// }
 var ul =document.getElementById('list')
 var li
const addItem=()=>{
    console.log('add button clicked');
}

const removeItem=()=>{
    li=ul.children
    for(let index =0; index <li.length; index++)
    {
     while(li[index].children[0].checked)
     {
         ul.removeChild(li[index])
     }
    }

}


const removeallItem=()=>{
    li=ul.children
    for(let index =0; index <li.length; index++)
    {

         ul.removeChild(li[index])
    }

}


var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeButton = document.getElementById('removeall');
removeButton.addEventListener('click',removeallItem);


