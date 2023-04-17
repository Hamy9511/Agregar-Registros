(() => {
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
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    }

btn.addEventListener("click", createTask); //Lllamando a la funcion para hacer el listener

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon" ); //icono de checklist
    i.addEventListener("click", completeTask); //Evento de click en el boton del icono del checklist
    return i;
}

//Inmediately invoke function expression IIFE
const completeTask = () =>{ //funcion para reemplazar la palomita del checklist al darle click a nuestro elemnto checkcomplete
    const element = event.target; 
    element.classList.toggle("fas"); //toggle es una funcion de si exite la quita y si no exite la pone
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashicon", "icon"); //agregar icono dd e delete
    i.addEventListener("click", deleteTask); //Listener de un click abre la funcion deleteTask
    return i;
}

const deleteTask = (event) =>{
    console.log("EliinarTarea");
    //console.log(event.target.parentElement); //para vwerificar el padre de mi elemento o evento
    const parent = event.target.parentElement; //asiganmos variable al elemento padre
    parent.remove();

}

})();