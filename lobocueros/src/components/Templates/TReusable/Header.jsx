import React from 'react';
import Search_White from '../../../assets/Icons/Search_White.svg'
import User from '../../../assets/Icons/User.svg'
import MiniCar from '../../../assets/Icons/MiniCar.svg'
import Lobocueros from '../../../assets/Icons/Lobocueros.svg'
import Arrow_White from '../../../assets/Icons/Arrow_White.svg'
import BurgerMenu from '../TReusable/TROrganisms/BurgerMenu'


const Header = () => {
    return(
      <header className="header-main">
        <div className="headerUp">
          <div className="slogan">
            <span>Marroquineros de Corazón</span>
          </div>
          <div className="menu-headerUp">
              <i><img src={Search_White} alt="search"></img></i>
              <i><img src={User} alt="user"></img></i>
              <i className="mini-cart-icon"><img src={MiniCar} alt="mini-car"></img></i>
              <span>0</span>
          </div>
        </div>
        <div className="headerDown">
          <div className="home-icon"><a href="/"><img src={Lobocueros} alt="home"></img></a></div>
          
          <nav className="nav">
            <ul className="main-menu">
              <li className="item-menu"><a href="/">Nuevo</a></li>
              <li className="item-menu"><a href="/">Mujer</a><img src={Arrow_White} alt="arrow"></img>
                <div className="submenu-nav" id="Mujer">
                  <ul>
                    <li className="submenu-item">Bolsos
                      <ul>
                        <li>Ver Todo</li>
                        <li>Bolsos</li>
                        <li>Morrales</li>
                        <li>Maletines</li>
                        <li>Manos Libres</li>
                      </ul>
                    </li>
                      
                    <li className="submenu-item">Correas</li>
                    <li className="submenu-item">Bileteras</li>
                    <li className="submenu-item">Accesorios
                      <ul>
                        <li>Ver Todo</li>
                        <li>Bolsos</li>
                        <li>Morrales</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="item-menu"><a href="/">Hombre</a><img src={Arrow_White} alt="arrow"></img>
                <div className="submenu-nav" id="hombre">
                  <ul>
                    <li className="submenu-item">Bolsos
                      <ul>
                        <li>Ver Todo</li>
                        <li>Bolsos</li>
                        <li>Morrales</li>
                        <li>Maletines</li>
                        <li>Manos Libres</li>
                      </ul>
                    </li>
                      
                    <li className="submenu-item">Correas</li>
                    <li className="submenu-item">Bileteras</li>
                    <li className="submenu-item">Accesorios
                      <ul>
                        <li>Ver Todo</li>
                        <li>Bolsos</li>
                        <li>Morrales</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="item-menu"><a href="/">Tapabocas</a></li>
            </ul>
          </nav>
        
          <div className="burger-menu">
            <BurgerMenu></BurgerMenu>
                <div className="submenu-nav">
                  <ul>
                    <li className="submenu-item">Bolsos
                      <ul>
                        <li>Ver Todo</li>
                        <li>Bolsos</li>
                        <li>Morrales</li>
                        <li>Maletines</li>
                        <li>Manos Libres</li>
                      </ul>
                    </li>
                      
                    <li className="submenu-item">Correas</li>
                    <li className="submenu-item">Bileteras</li>
                    <li className="submenu-item">Accesorios
                      <ul>
                        <li>Ver Todo</li>
                        <li>Bolsos</li>
                        <li>Morrales</li>
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