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
              <li><a href="/sobrenosotros">¿Quienes somos?</a></li>
              <li><a href="/sobrenosotros">¿Como comprar?</a></li>
              <li><a href="/sobrenosotros">Terminos y condiciones</a></li>
              <li><a href="/sobrenosotros">Nuestras politicas</a></li>
            </ul>
          </div>
        </div>
        <div className="contacto-footer">
          <div className="title-contacto-footer">
            <p>Contactanos</p>
          </div>
          <div className="menu-contacto-footer">
            <ul>
              <li><a href="/contacto">Calle 12B #3-15 SUR - Bogota</a></li>
              <li><a href="/contacto">Calle 16 #5-70 Local 4 - Bogota</a></li>
            </ul>
            <ul>
              <li><a href="/contacto">313 871 1212</a></li> 
            </ul>
            <ul>
              <li><a href="/contacto">lobocueros@gmail.com</a></li>
            </ul>
            
          </div>
        </div>
        <div className="social-footer">
          <div className="title-social-footer">
            <p>Redes Sociales</p>
          </div>
          <div className="menu-social-footer">
            <ul>
              <li><a href="https://www.instagram.com/lobocueros/" target="_blank"><img alt="instagram" src={Instagram_White}></img></a></li>
              <li><a href="https://www.facebook.com/lobocuerosas" target="_blank"><img alt="facebook" src={Facebook_White}></img></a></li>
              <li><a href="https://wa.me/573113582648" target="_blank"><img alt="whatsapp" src={WhatsApp_White}></img></a></li>
              <li><a href="https://www.google.com/maps/place/Lobocueros/@4.5882023,-74.0926449,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f999e629b6dd3:0x6bfa81868f4e7c85!8m2!3d4.5882023!4d-74.0904562" target="_blank"><img alt="google" src={Google_White}></img></a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
}
export default Footer;