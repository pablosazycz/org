import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () =>{
    return <section className='formulario'>
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese su Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese su Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de su Foto"/>
        </form>
    </section>
}

export default Formulario