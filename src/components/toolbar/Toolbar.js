import React, { useState, useEffect } from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../sidedrawer/DrawerToggleButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Toolbar(props) {
    const [active, setActive] = useState('item-1');

    useEffect(() => {
        var bodyRect = document.body.getBoundingClientRect();

        const section2 = document.getElementById('section-2');
        const offsetSection2 = section2.getBoundingClientRect().top - bodyRect.top;

        const section3 = document.getElementById('section-3');
        const offsetSection3 = section3.getBoundingClientRect().top - bodyRect.top;

        const section4 = document.getElementById('section-4');
        const offsetSection4 = section4.getBoundingClientRect().top - bodyRect.top;

        window.onscroll = () => {
            var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (scrollTop < offsetSection2 - 56) {
                setActive('item-1');
            } else if (scrollTop < offsetSection3 - 56) {
                setActive('item-2');
            } else if (scrollTop < offsetSection4 - 56) {
                setActive('item-3');
            } else {
                setActive('item-4');
            }
        }
    });

    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar-logo">
                    <AnchorLink
                        href="#section-1"
                        offset="56">
                        Title
                    </AnchorLink>
                </div>
                <div className="spacer"></div>
                <div className="toolbar-navigation-items">
                    <ul>
                        <li>
                            <AnchorLink
                                href="#section-1"
                                id="item-1"
                                offset="56"
                                className={active === "item-1" ? "active" : ""}>
                                Section 1
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#section-2"
                                id="item-2"
                                offset="56"
                                className={active === "item-2" ? "active" : ""}>
                                Section 2
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#section-3"
                                id="item-3"
                                offset="56"
                                className={active === "item-3" ? "active" : ""}>
                                Section 3
                            </AnchorLink>
                        </li>
                        <li>
                            <AnchorLink
                                href="#section-4"
                                id="item-4"
                                offset="56"
                                className={active === "item-4" ? "active" : ""}>
                                Section 4
                            </AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}