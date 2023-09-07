import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingrese su Nombre" />
        <CampoTexto titulo="Puesto" placeholder="Ingrese su Puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingrese enlace de su Foto" />
        <ListaOpciones />
        <Boton>Crear colaborador</Boton>
      </form>
    </section>
  );
};

export default Formulario;
