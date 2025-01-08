import Galeria from "./components/galeria";
import Header from "./components/header";
import Footer from "./components/footer";
import poaQuiro from "./images/banner3.webp";
import mercadoMagistral from "./images/banner1.webp";
import lojaVirtual from "./images/banner2.webp";
import savePc from "./images/banner4.webp";
import Works from "./components/works";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Header />
      <Galeria />

      <div className="container">
        <div className="portfolio">

          <Works 
          image={poaQuiro} 
          title={'Poá Quiro'} 
          text={'Poá Quiro foi desenvolvido em WordPress. Com design responsivo e otimização da página para carregamento mais rápido. Também fiz o registro de domínio, apontamento de DNS e publicação do site via FTP.'} 
          link={'www.poaquiro.com.br'}
          />

          <Works
          image={mercadoMagistral}
          title={'Mercado Magistral'}
          text={'Neste projeto desenvolvi o front 100% responsivo de todas as páginas utilizando HTML/CSS/Bootstrap.<br /> Para o banner principal da home utilizei a biblioteca Slick JS.'}
          link={'www.mercadomagistral.com.br'}
          />

          <Works
          image={lojaVirtual}
          title={'Loja Virtual WooCommerce'}
          text={'Neste projeto desenvolvi um e-commerce utilizando o WooCommerce. Ele é um plugin open source para WordPress. Para o desenvolvimento criei um servidor local com Apache e banco de dados com phpMyAdmin.<br /> Para publicação do site gerei um pacote com o Duplicator e criei o banco de dados na minha hospedagem. Subi o site via FTP e iniciei a instalação passando os dados do banco.<br /> (Este projeto foi desenvolvido para o meu portfólio).'}
          link={'www.carolinaprado.com.br/lojavirtual'}
          />

          <Works
          image={savePc}
          title={'Save PC'}
          text={'Este projeto foi desenvolvido em WordPress. Site one page 100% responsivo.<br /> Optei por criar o site em WordPress porque ele é um sistema CMS que permite o gerenciamento do conteúdo, dando autonomia ao cliente.'}
          link={'www.savepc.com.br'}          
          />

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
