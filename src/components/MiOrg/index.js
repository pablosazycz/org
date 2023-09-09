import './MiOrg.css'
import { useState } from 'react'


//const[nombreVariable,funcion que actuliza el estado] = use

const MiOrg = (props) =>{

    
    // const [nombre,actualizarNombre] = useState("Pablo")
    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = () =>{
    //     console.log("mostrar/ocultar elemento",mostrar)
    //     actualizarMostrar(!mostrar);
    // }
    return (
        <section className="orgSection">
            <h3 className='title'>Mi Organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
        </section>
    )
}

export default MiOrg