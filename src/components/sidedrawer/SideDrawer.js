import React from 'react';
import './SideDrawer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function SideDrawer(props) {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div className="side-drawer-items">
                <span>Title</span>
                <ul>
                    <AnchorLink href="#section-1" offset="56" onClick={props.close}><li>Section 1</li></AnchorLink>
                    <AnchorLink href="#section-2" offset="56" onClick={props.close}><li>Section 2</li></AnchorLink>
                    <AnchorLink href="#section-3" offset="56" onClick={props.close}><li>Section 3</li></AnchorLink>
                    <AnchorLink href="#section-4" offset="56" onClick={props.close}><li>Section 4</li></AnchorLink>
                </ul>
            </div>
        </nav>
    );
}