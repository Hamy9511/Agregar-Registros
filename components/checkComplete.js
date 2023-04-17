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
export default checkComplete;