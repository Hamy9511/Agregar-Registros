const btn = document.querySelector("[data-form-btn]");

const  createTask = (evento) =>{ //Arrow function o Funciones anonimas  //Liatener para el boton agregar
        //listener
        evento.preventDefault(); //Para no refrescar la pantalla
        const input = document.querySelector("[data-form-input]");
        const value = input.value; 
        const task = document.createElement("li");
        const list = document.querySelector("[data-list]");
        task.classList.add("card"); //agregammos una nueva clase
        input.value = " "; //Al agregar una tarea se borre el texto del input
        //HACER QUE JS AGREGUE CONTENIDO AL DOM
        const taskContent = document.createElement("div"); //creo el div
        taskContent.appendChild(checkComplete()); //inserto dentro del div la fucnion
        const titleTask = document.createElement("span"); //creo la etiqueta span
        titleTask.classList.add("task"); //Lo llamo con el id task
        titleTask.innerText = value; //inserto en el span el valor de value
        taskContent.appendChild(titleTask);
        const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`
        task.appendChild(taskContent);
        list.appendChild(task);
        console.log(content);
    }

btn.addEventListener("click", createTask); //Lllamando a la funcion para hacer el listener

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon");
    return i;
}