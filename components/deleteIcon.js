const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashicon", "icon"); //agregar icono dd e delete
    i.addEventListener("click", deleteTask); //Listener de un click abre la funcion deleteTask
    return i;
}

const deleteTask = (event) =>{
    //console.log(event.target.parentElement); //para vwerificar el padre de mi elemento o evento
    const parent = event.target.parentElement; //asiganmos variable al elemento padre
    parent.remove();

}

export default deleteIcon;