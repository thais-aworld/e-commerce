import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const contactInfo = [
    { text: "Endereço: Av. Lorem Ipsum, 123 - Juazeiro do Norte, Ceará, Brasil", link: "#" },
    { text: "Telefone: (88) 9999-9999", link: "tel:+558899999999" },
    { text: "Email: contato@dripstore.com", link: "mailto:contato@dripstore.com" }
  ];

  return (
    <footer className="main-footer">
      <div className="footer-container content-wrapper">
        <div className="footer-section footer-info">
          <Link to="/" className="footer-logo-link">
            <img src="/icons/logo-footer.svg" alt="Digital Store Logo" className="footer-logo" />
          </Link>
          <p className="footer-description">
            Sua loja online de tênis e moda, com as melhores marcas e preços que cabem no seu bolso.
          </p>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Informação</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Produtos</Link></li>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Categorias</h4>
          <ul>
            <li><Link to="/categories/masculino">Masculino</Link></li>
            <li><Link to="/categories/feminino">Feminino</Link></li>
            <li><Link to="/categories/infantil">Infantil</Link></li>
            <li><Link to="/categories/promocoes">Promoções</Link></li>
            <li><Link to="/categories/acessorios">Acessórios</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contato</h4>
          {contactInfo.map((item, index) =>
            item.link.startsWith('tel:') || item.link.startsWith('mailto:') ? (
              <p key={index}>
                <a href={item.link}>{item.text}</a>
              </p>
            ) : (
              <p key={index}>
                <Link to={item.link}>{item.text}</Link>
              </p>
            )
          )}
        </div>
      </div>

      <div className="footer-bottom content-wrapper">
        <p>&copy; {new Date().getFullYear()} Digital Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
