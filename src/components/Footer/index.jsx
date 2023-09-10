import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.aluracursos.com">
          <img src="/img/facebook.png" alt="face" />
        </a>
        <a href="https://www.aluracursos.com">
          <img src="/img/twitter.png" alt="tw" />
        </a>
        <a href="https://www.aluracursos.com">
          <img src="/img/instagram.png" alt="ig" />
        </a>
      </div>
      <img src="/img/logo.png" alt="logo" />
      <strong>Desarrollado por Pablo</strong>
    </footer>
  );
};

export default Footer;
