const btn = document.querySelector("[data-form-btn]");

const  createTask = (evento) =>{ //Arrow function o Funciones anonimas  //Liatener para el boton agregar
        //listener
        evento.preventDefault(); //Para no refrescar la pantalla
        const input = document.querySelector("[data-form-input]");
        console.log(input.value);
    }

btn.addEventListener("click", createTask); //Lllamando a la funcion para hacer el listener