import React from 'react';
import '../../assets/css/style.min.css'

export default function NavBar(params) {
    return (
        <div>
            {/* MENU NAV */}
            <nav id="navigation">
                {/* container */}
                <div className="container">
                    {/* responsive-nav */}
                    <div id="responsive-nav">
                        {/* NAV */}
                        <ul className="main-nav nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Categorias</a></li>
                            <li><a href="#">Laptops</a></li>
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Cameras</a></li>
                            <li><a href="#">Accessorios</a></li>
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
