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
 console.log(ul);
 var li
const addItem=()=>{
   var input=document.getElementById('input')
   var item = input.value
   ul = document.getElementById('list')
   var textnode = document.createTextNode(item)

   if(item === '')
   {
       return false;
   }
   else{


       li = document.createElement('li')
       var checkbox = document.createElement('input')
       checkbox.type='checkbox';
       checkbox.setAttribute('id','check')

       var label =document.createElement('lable')
       label.setAttribute('for','item')

       ul.appendChild(label)
       li.appendChild(checkbox)
       label.appendChild(textnode)
       li.appendChild(label)
       ul.insertBefore(li,ul.childNodes[0])
       li.className='visual'
       
       input.value =''
   }
}

const removeItem=()=>{
    li=ul.children
    console.log(li);
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
    console.log(li);
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


