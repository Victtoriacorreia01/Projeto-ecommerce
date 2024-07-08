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
          <p>All our social networks:</p>
          <div className="socials">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Links Úteis</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contato</h2>
          <p><FontAwesomeIcon icon={faPhone} /> (000) 0000-0000</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2024 E-Commerce. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
