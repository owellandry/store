// src/components/dist/Footer.jsx
import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className='foot-cont'>
      <div className='cont-foot-div'>
        <div className='icons-foot'>
          <a className='foot-a' href="/#" target="_blank" rel="noopener noreferrer" title="">
            <img src="https://img.icons8.com/?size=48&id=32309&format=png" alt="Instagram" />
          </a>
          <a className='foot-a' href="/#" target="_blank" rel="noopener noreferrer" title="">
            <img src="https://img.icons8.com/?size=48&id=60440&format=png" alt="Facebook" />
          </a>
          <a className='foot-a' href="/#" target="_blank" rel="noopener noreferrer" title="">
            <img src="https://img.icons8.com/?size=48&id=phOKFKYpe00C&format=png" alt="Twitter" />
          </a>
          <a className='foot-a' href="/#" target="_blank" rel="noopener noreferrer" title="">
            <img src="https://img.icons8.com/?size=48&id=37326&format=png" alt="Youtube" />
          </a>
          <a className='foot-a' href="/#" target="_blank" rel="noopener noreferrer" title="">
            <img src="https://img.icons8.com/?size=48&id=60444&format=png" alt="Linkedin" />
          </a>
          <a className='foot-a' href="/#" target="_blank" rel="noopener noreferrer" title="">
            <img src="https://img.icons8.com/?size=48&id=3tC9EQumUAuq&format=png" alt="Github" />
          </a>
        </div>
        <div className='text-foot'>
          <p>&copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
