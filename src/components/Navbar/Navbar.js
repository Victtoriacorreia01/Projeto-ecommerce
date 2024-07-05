import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from "../../assets/logo.png";

const Navbar = () => {
  
  const [activeOption, setActiveOption] = useState(null);

  const options = [
    { title: 'Home', content: 'lorem'  },
    { title: 'About Us', content: 'lorem' },
    { title: 'Contact', content: 'lorem'  },
    { title: 'Projects', content: 'lorem'  }, 
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="navbar-links">
        {options.map((option, index) => (
          <li key={index}>
            <Link to="/"
              onMouseEnter={() => setActiveOption(index)}
              onMouseLeave={() => setActiveOption(null)}>
              {option.title}
              {activeOption === index && (
                <div className="options">
                  <p>{option.title}</p>
                  <FontAwesomeIcon icon={option.icon} />
                  {/* Adicionar mais conteúdo */}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faGlobe} />
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faHeadset} />
      </div>
    </nav>
  );
};

export default Navbar;
