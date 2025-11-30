let savebutton = document.querySelector('#save');
let input_field = document.querySelector('#text');
let display_area = document.querySelector('.display_area');
let the_lists = document.querySelector('.the_list');


function addTask(){
    savebutton.addEventListener('click', ()=>{
       
        const newtask = input_field.value.trim();
       
        if (newtask === "") {return}

        createTaskElement(newtask);
        saveTaskToLocalStorage(task);

        input_field.value ="";


    })
}


addTask()

function createTaskElement(task){

    let li = document.createElement('li');
    li.innerHTML = `<span id='task_ids'>${task.trim()}</span> 
    <button type='button 'class='remove_button'>remove</button>
    `

    display_area.appendChild(li)

    li.querySelector('.remove_button').addEventListener('click', ()=>{
       li.remove();
     })
}


function saveTaskToLocalStorage(task){

}