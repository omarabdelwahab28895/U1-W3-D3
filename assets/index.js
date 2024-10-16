const addTaskBtn = document.getElementById('btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('list');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');
        
        li.textContent = taskText;
        
        taskList.appendChild(li);
        
        taskInput.value = "";
        
        li.addEventListener('click', () => {
            li.classList.toggle('completato');
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Elimina';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
    }
});
