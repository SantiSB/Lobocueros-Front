import React from 'react';
import Search_White from '../../../assets/Icons/Search_White.svg'
import Lobocueros from '../../../assets/Icons/Lobocueros.svg'
import Arrow_White from '../../../assets/Icons/Arrow_White.svg'
import BurgerMenu from '../../Molecules/MReusable/BurgerMenu'
import LoginModal from '../../Organisms/OReusable/LoginModal';
import MiniCart from '../../Organisms/OReusable/MiniCart';


const Header = () => {
    return(
      <header className="header-main">
        <div className="headerUp">
          <div className="slogan">
            <span>Marroquineros de Corazón</span>
          </div>
          <div className="menu-headerUp">
              <i><img src={Search_White} alt="search"></img></i>
              <LoginModal></LoginModal>
              <MiniCart></MiniCart>
              <span>0</span>
          </div>
        </div>
        <div className="headerDown">
          <div className="home-icon"><a href="/"><img src={Lobocueros} alt="home"></img></a></div>
          
          <nav className="nav">
            <ul className="main-menu">
              <li className="item-menu"><a href="/productos">Nuevo</a></li>
              <li className="item-menu"><a href="/productos">Mujer</a><img src={Arrow_White} alt="arrow"></img>
                <div className="submenu-nav" id="Mujer">
                  <ul>
                    <li className="submenu-item"><a href="/productos">Bolsos</a>
                      <ul>
                        <li><a href="/productos">Ver Todo</a></li>
                        <li><a href="/productos">Bolsos</a></li>
                        <li><a href="/productos">Morrales</a></li>
                        <li><a href="/productos">Maletines</a></li>
                        <li><a href="/productos">Manos Libres</a></li>
                      </ul>
                    </li>
                      
                    <li className="submenu-item"><a href="/productos">Correas</a></li>
                    <li className="submenu-item"><a href="/productos">Bileteras</a></li>
                    <li className="submenu-item"><a href="/productos">Accesorios</a>
                      <ul>
                        <li><a href="/productos">Ver Todo</a></li>
                        <li><a href="/productos">Bolsos</a></li>
                        <li><a href="/productos">Morrales</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="item-menu"><a href="/productos">Hombre</a><img src={Arrow_White} alt="arrow"></img>
                <div className="submenu-nav" id="hombre">
                  <ul>
                    <li className="submenu-item"><a href="/productos">Bolsos</a>
                      <ul>
                        <li><a href="/productos">Ver Todo</a></li>
                        <li><a href="/productos">Bolsos</a></li>
                        <li><a href="/productos">Morrales</a></li>
                        <li><a href="/productos">Maletines</a></li>
                        <li><a href="/productos">Manos Libres</a></li>
                      </ul>
                    </li>
                      
                    <li className="submenu-item"><a href="/productos">Correas</a></li>
                    <li className="submenu-item"><a href="/productos">Bileteras</a></li>
                    <li className="submenu-item"><a href="/productos">Accesorios</a>
                      <ul>
                        <li><a href="/productos">Ver Todo</a></li>
                        <li><a href="/productos">Bolsos</a></li>
                        <li><a href="/productos">Morrales</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="item-menu"><a href="/productos">Tapabocas</a></li>
            </ul>
          </nav>
        
          <div className="burger-menu">
            <BurgerMenu></BurgerMenu>
                <div className="submenu-nav">
                  <ul>
                    <li className="submenu-item"><a href="/productos">Bolsos</a>
                      <ul>
                        <li><a href="/productos">Ver Todo</a></li>
                        <li><a href="/productos">Bolsos</a></li>
                        <li><a href="/productos">Morrales</a></li>
                        <li><a href="/productos">Maletines</a></li>
                        <li><a href="/productos">Manos Libres</a></li>
                      </ul>
                    </li>
                      
                    <li className="submenu-item"><a href="/productos">Correas</a></li>
                    <li className="submenu-item"><a href="/productos">Bileteras</a></li>
                    <li className="submenu-item"><a>Accesorios</a>
                      <ul>
                        <li><a href="/productos">Ver Todo</a></li>
                        <li><a href="/productos">Bolsos</a></li>
                        <li><a href="/productos">Morrales</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
          </div>
        </div>
      </header>
    )
}
export default Header;