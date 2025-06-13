import './Logo.css';
import logoHeader from '../../assets/logo.header.svg';
import logoFooter from '../../assets/logo.footer.svg';

const Logo = ({ variant = 'header' }) => {
  const logoImage = variant === 'footer' ? logoFooter : logoHeader;

  return (
    <img
      src={logoImage}
      alt="Logo da aplicação"
      className="logo"
      width={253}
      height={44}
    />
  );
};

export default Logo;
