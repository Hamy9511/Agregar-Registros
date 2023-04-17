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
        const content = `  
        <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value /*este comando indica que es un commando JS en HTML*/}</span> 
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`
        task.innerHTML = content; //Aqui le digo que quiero agregar al HTML la variable content

        list.appendChild(task);
        console.log(content);
    }

btn.addEventListener("click", createTask); //Lllamando a la funcion para hacer el listener