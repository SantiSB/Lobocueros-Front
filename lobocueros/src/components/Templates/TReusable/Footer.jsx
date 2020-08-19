import React from 'react';
import Instagram_White from '../../../assets/Icons/Instagram_White.svg'
import Facebook_White from '../../../assets/Icons/Facebook_White.svg'
import WhatsApp_White from '../../../assets/Icons/WhatsApp_White.svg'
import Google_White from '../../../assets/Icons/Google_White.svg'

const Footer = () => {
    return(
      <footer className="footer-main">
        <div className="about-footer">
          <div className="title-about-footer">
            <p className="lobocueros-title">Lobocueros</p>
            <p className="slogan">Marroquineros de corazón</p>
          </div>
          <div className="menu-about-footer">
            <ul>
              <li><a href="/">¿Quienes somos?</a></li>
              <li><a href="/">¿Como comprar?</a></li>
              <li><a href="/">Terminos y condiciones</a></li>
              <li><a href="/">Nuestras politicas</a></li>
            </ul>
          </div>
        </div>
        <div className="contacto-footer">
          <div className="title-contacto-footer">
            <p>Contactanos</p>
          </div>
          <div className="menu-contacto-footer">
            <ul>
              <li><a href="/">Calle 12B #3-15 SUR - Bogota</a></li>
              <li><a href="/">Calle 16 #5-70 Local 4 - Bogota</a></li>
            </ul>
            <ul>
              <li><a href="/">313 871 1212</a></li> 
            </ul>
            <ul>
              <li><a href="/">lobocueros@gmail.com</a></li>
            </ul>
            
          </div>
        </div>
        <div className="social-footer">
          <div className="title-social-footer">
            <p>Redes Sociales</p>
          </div>
          <div className="menu-social-footer">
            <ul>
              <li><a href="/"><img alt="instagrem" src={Instagram_White}></img></a></li>
              <li><a href="/"><img alt="facebook" src={Facebook_White}></img></a></li>
              <li><a href="/"><img alt="whatsapp" src={WhatsApp_White}></img></a></li>
              <li><a href="/"><img alt="google" src={Google_White}></img></a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
}
export default Footer;