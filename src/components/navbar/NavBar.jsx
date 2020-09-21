import React from 'react';
import { Link } from 'react-router-dom'

export default function NavBar(params) {
    return (
        <div>
            {/* MENU NAV */}
            <nav id="navigation">
                {/* container */}
                <div className="container">
                    {/* responsive-nav */}
                    <div id="responsive-nav" >
                        {/* NAV */}
                        <ul className="main-nav main-navbar">
                            <Link to="/">
                                <li><a href="#" target="_blank">Home</a></li>
                            </Link>
                            <Link to="/store">
                                <li><a href="#" target="_blank">Categorias</a></li>
                            </Link>
                            <Link to="product">
                                <li><a href="#" target="_blank">Produto</a></li>
                            </Link>
                            <Link to="checkout">
                                <li><a href="#" target="_blank">Checkout</a></li>
                            </Link>
                        </ul>
                        {/* /NAV */}
                    </div>
                    {/* /responsive-nav */}
                </div>
                {/* /container */}
            </nav>
            {/* / MENU NAV */}

        </div>
    );
};
