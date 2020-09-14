import React from 'react';
import '../../assets/css/style.min.css'


export default function TopHeader(params) {
    return (
        <div>
            <header>
                {/* TOP HEADER  */}
                <div id="top-header">
                    <div className="container">
                        <ul className="header-links pull-left">
                            <li><a href="#"><i className="fa fa-phone"></i> +244-000-00-00-00</a></li>
                            <li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
                            <li><a href="#"><i className="fa fa-map-marker"></i> Talatona/Rua 8 </a></li>
                        </ul>
                        <ul className="header-links pull-right">
                            <li><a href="#"><i className="fa fa-user-o"></i> Minha Conta</a></li>
                        </ul>
                    </div>
                </div>
                {/* END TOP HEADER  */}
            </header>
        </div>
    );
};
