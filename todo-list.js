const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const mylists = document.querySelector('.mylists');
const bin = document.querySelectorAll('.trash');
const date = document.querySelector('.date');

// add date
let options = {
    weekday: "long",
    month: "short",
    day: "numeric"
}
let today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);

// functionality

submit.addEventListener('click', addTodo);
function addTodo(event){
    event.preventDefault();
    let toDo = input.value;
    if(toDo){
        createLists(toDo);
    }
    input.value ='';
}
let position = "beforeend";

function createLists(toDo){
    const text = `<li>${input.value} <img src="trash.svg" alt="" class="trash delete"></li>`
    // mylists.insertAdjacentHTML(position, text);
    mylists.innerHTML += text;
}

// delete function....
mylists.addEventListener('click', removeItem);

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        mylists.removeChild(li);
    }
}