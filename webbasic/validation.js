const myvalidation =()=>{
    let myvalue=document.querySelector('#myform').value;
    if(isNaN(myvalue)|| myvalue < 1 || myvalue > 20){
        newpara=document.querySelector('#idone')
        newpara.textContent='not valid input';
    }
    else{
        newpara=document.querySelector('#idone')
        newpara.textContent='valid input';
    }

}

document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    event.target.username.value=''
})