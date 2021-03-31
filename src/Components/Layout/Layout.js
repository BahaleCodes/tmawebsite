import React, { Component } from 'react';

import Aux from '../../hoc/aux';
// import './Layout.css';
import Navigation from '../../Sections/tma/Containers/navigation';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }
    render() {
        return (
            <Aux>
                <Navigation/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;