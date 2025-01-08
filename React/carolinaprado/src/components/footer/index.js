import "./footer.css";

function Footer() {
  return (
    <footer id="contato">
      <div className="container flex">
        <p className="email">carolina.prado@live.com</p>
        <p className="telefone">(11) 9 1328-8205</p>
      
        <p className="linkedin"><a href="http://www.linkedin.com/in/carolinaprado" target="_blank" rel="noreferrer">http://www.linkedin.com/in/carolinaprado</a></p>
        <p className="github"><a href="https://github.com/carolinapradosp/" target="_blank" rel="noreferrer">https://github.com/carolinapradosp/</a></p>
      </div>
    </footer>
  );
}

export default Footer;
