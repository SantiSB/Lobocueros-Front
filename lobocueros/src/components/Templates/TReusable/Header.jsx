import React from 'react';
import { connect } from "react-redux";
import { setVisibleSearchForm, setVisibleMenu, setItemsInCart } from "../../../redux/actionsCreators";
import Search_White from '../../../assets/Icons/Search_White.svg'
import Lobocueros from '../../../assets/Icons/Lobocueros.svg'
import Arrow_White from '../../../assets/Icons/Arrow_White.svg'
import BurgerMenu from '../../Molecules/MReusable/BurgerMenu'
import LoginModal from '../../Organisms/OReusable/LoginModal';
import MiniCart from '../../Organisms/OReusable/MiniCart';


const Header = (props) => {
  
  let item = localStorage.getItem('filtro')
  React.useEffect(()=>{
    console.log("qwer", item)
  })

  const clic = () => {
    localStorage.setItem('filtro', "Mujer");
  }
  const clic2 = () => {
    localStorage.setItem('filtro', "Hombre");
  }
    return(
      <header className="header-main">
        <div className="headerUp">
          <div className="slogan">
            <span>Marroquineros de Corazón</span>
          </div>
          <div className="menu-headerUp">
              <form className="search-form" style={props.visibleSearchForm == false ? {visibility: "hidden"} : {visibility: "visible"}}>
                <input type="text"></input>
              </form> 
              <i onClick={()=>props.setVisibleSearchForm(props.visibleSearchForm == false ? true : false)}><img src={Search_White} alt="search"></img></i>
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
              <li className="item-menu"><a href="/productos" onClick={()=>clic()}>Mujer</a><img src={Arrow_White} alt="arrow"></img>
                <div className="submenu-nav" id="Mujer" >
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
              <li className="item-menu"><a href="/productos" onClick={()=>clic2()}>Hombre</a><img src={Arrow_White} alt="arrow"></img>
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
        
          <div className="title-lobocueros">
            <p>LOBOCUEROS</p>
          </div>

          <div className="burger-menu">
            <BurgerMenu></BurgerMenu>
                <div className="submenu-nav" id="submenu-nav" style={props.visibleMenu == false ? {display: "none"} : {display: "flex"}}> 
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

const mapStateToProps = (state) => ({
  visibleSearchForm: state.visibleSearchForm,
  visibleMenu: state.visibleMenu,
  itemsInCart: state.itemsInCart
});
  
const mapDispatchToProps = {
  setVisibleMenu,
  setVisibleSearchForm,
  setItemsInCart
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);