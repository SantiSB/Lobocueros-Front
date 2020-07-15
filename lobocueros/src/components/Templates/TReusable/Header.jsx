import React from 'react';
import Search_White from '../../../assets/Icons/Search_White.svg'
import User from '../../../assets/Icons/User.svg'
import MiniCar from '../../../assets/Icons/MiniCar.svg'
import Lobocueros from '../../../assets/Icons/Lobocueros.svg'
import Arrow_White from '../../../assets/Icons/Arrow_White.svg'

const Header = () => {
    return(
      <header className="header">
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
          <nav className="nav">
            <ul>
              <li className="home-icon"><a href="#"><img src={Lobocueros} alt="home"></img></a></li>
              <li><a href="#">Nuevo</a><img src={Arrow_White} alt="arrow"></img></li>
              <li><a href="#">Mujer</a><img src={Arrow_White} alt="arrow"></img></li>
              <li><a href="#">Hombre</a><img src={Arrow_White} alt="arrow"></img></li>
              <li><a href="#">Tapabocas</a><img src={Arrow_White} alt="arrow"></img></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}
export default Header;