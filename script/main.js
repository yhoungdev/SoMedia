//get element of the icon
let menu=document.querySelector('.fa');


//now set the action
menu.addEventListener('click' , ()=> {
    let side=document.querySelector('#side');

    side.classList.toggle('sidebar')
})