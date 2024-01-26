/*#########################################################
                        IMPORTACIONES
###########################################################*/ 

//Modulos
//Estilos
import './NavBar.css'
//Componentes
//Core
 
/*#########################################################
                        LOGICA
###########################################################*/ 

const NavBar = (props) => { //Funcion constructora

    const fecha = new Date()
    //Retorno que se va a renderizar
    return(
        <header className='navbar'>
            <p>Mi primer Enlace y te saludo = {props.saludo} y cuando me retiro digo = {props.despedida}</p>
            <p>La fecha de hoy es {fecha.getDate()}</p>
        </header>
    )
}


/*#########################################################
                        EXPORTACION
###########################################################*/ 
export default NavBar