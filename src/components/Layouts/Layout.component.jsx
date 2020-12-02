import React from 'react';
import Aux from '../../hoc/Aux';

import './Layout.styles.scss';

const Layouts = (props) => {
    return ( 
        <Aux>
            <div className="layout-title">Toolbar, SideDrawer, Backdrop</div>
            <main className="content">
                {props.children}
            </main> 
        </Aux>
    );
}
 
export default Layouts;