// Define UI element 
let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let tasklist = document.querySelector('#tasks');
let clearBtn = document.querySelector('#clear_task_btn');

// Define Event Listener
form.addEventListener('submit',addTask);
tasklist.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTasks);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTask);

// Define Function
// addTask function
function addTask(e){
    if(taskInput.value==''){
        alert("Add a Task!!");
    }else{
        let tasks = document.querySelectorAll('li');
        let flag =true;
        tasks.forEach(task=>{
            console.log(task);
            console.log(taskInput.value);
            if(task.firstChild.textContent.trim()==taskInput.value){
                flag = false;
            }
        })
        
        if(!flag){
            alert(`${taskInput.value} already added!!`);
        }
        else{
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(taskInput.value + " "));
            taskInput.value = '';
            let link = document.createElement('a');
            link.setAttribute('href','#');
            link.appendChild(document.createTextNode('X'));
            li.appendChild(link);
            tasklist.appendChild(li);
    
            addTaskToLS(li.firstChild.textContent);
        }
    }
    e.preventDefault();
}

// removeTask function
function removeTask(e){
    
    if(e.target.hasAttribute('href')){
        if(confirm("Are You Sure?")){
            let li = e.target.parentNode;
            li.remove();

            removeTaskFromLS(li);
        }
    }
    // console.log(e.target);
}

// clearTasks function
function clearTasks(e){
    // tasklist.innerHTML = '';

    // Faster way
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
    localStorage.clear();
}


// Filter task
function filterTask(e){
    let key = (e.target.value).toLowerCase();

    document.querySelectorAll('li').forEach(task=>{
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(key) != -1){
            task.style.display = 'block';
        } else{
            task.style.display = 'none';
        }
    })
}

// add task to localStorage
function addTaskToLS(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTask(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task=>{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.appendChild(document.createTextNode('X'));
        li.appendChild(link);
        tasklist.appendChild(li);
    })
}

// Remove task from localStorage
function removeTaskFromLS(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let text = task.firstChild.textContent.trim();
    tasks.forEach((item,index)=>{
        if(item.trim() === text){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}