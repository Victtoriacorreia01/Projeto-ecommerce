import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logo from '../../assets/logo.png'; // Caminho para sua imagem de logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={logo} alt="Logo da Empresa" className="logo" />
          <div className="socials">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="footer-section links">
          
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contato</h2>
          <p><FontAwesomeIcon icon={faPhone} /> (123) 456-7890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2024 Your E-Commerce. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
