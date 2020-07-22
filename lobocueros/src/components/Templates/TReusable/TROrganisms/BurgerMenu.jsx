import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class BurgerMenu extends Component {
    state = {
        open:false
    }
    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return(
			<HamburgerMenu
				className="burger"
				isOpen={this.state.open}
				menuClicked={this.handleClick.bind(this)}
				width={30}
				height={15}
				strokeWidth={3}
				rotate={0}
				color='white'
				borderRadius={0}
				animationDuration={0.5}
			/>
                    
        )
    }
    
}
export default BurgerMenu;