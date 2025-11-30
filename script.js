let savebutton = document.querySelector('#save');
let input_field = document.querySelector('#text');
let display_area = document.querySelector('.display_area');
let the_lists = document.querySelector('.the_list');


function addTask(){
    savebutton.addEventListener('click', ()=>{
       
        const newtask = input_field.value.trim();
       
        if (newtask === "") {return}

        createTaskElement(newtask);

        input_field.value ="";


    })
}


addTask()

function createTaskElement(task){

    let new_item = document.createElement('li');
    new_item.textContent = task
    display_area.appendChild(new_item)
}
