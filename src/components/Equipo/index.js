import './Equipo.css'
import Colaborador
 from '../Colaborador'
const Equipo = (props) =>{

//Destructuracion
const {colorPrimario,colorSecundario,titulo} = props.datos
const obj ={
    backgroundColor:colorSecundario
}
const {colaboradores}=props
const estiloTitulo = {borderColor:colorPrimario}

    return <>
    {colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className='colaboradores'>
                
               {
                colaboradores.map((colaborador,index)=><Colaborador datos={colaborador} key={index}/>)
               }
               
            </div>
        </section>
    }
    </>
}

export default Equipo