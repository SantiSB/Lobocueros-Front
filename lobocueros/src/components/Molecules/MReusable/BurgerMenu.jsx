import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import { connect } from "react-redux";
import { setVisibleSearchForm, setVisibleMenu } from "../../../redux/actionsCreators";

class BurgerMenu extends Component {
    state = {
        open:false
    }
    handleClick(props) {
        props.setVisibleMenu(props.visibleMenu == false ? true : false)

        this.setState({
            open: !this.state.open
        });
        
    }
    render() {
        return(
			<HamburgerMenu
				className="burger"
				isOpen={this.state.open}
				menuClicked={this.handleClick.bind(this, this.props)}
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

const mapStateToProps = (state) => ({
    visibleSearchForm: state.visibleSearchForm,
    visibleMenu: state.visibleMenu,
});

const mapDispatchToProps = {
    setVisibleMenu,
    setVisibleSearchForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);