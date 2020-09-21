import React from 'react';


export default function TopHeader(params) {
    return (
        <div>
            <header>
                {/* TOP HEADER  */}
                <div id="top-header">
                    <div className="container">
                        <ul className="header-links pull-left">
                            <li><a href="#"><i className="fa fa-phone"></i> +244-925-01-26-72</a></li>
                            <li><a href="https://gmail.com/send-mail/francisco.correia1804@gmail.com"><i class="fa fa-envelope-o"></i>francisco.correia1804@gmail.com</a></li>
                            <li><a href="#"><i className="fa fa-map-marker"></i> Camama/Rua 8 </a></li>
                        </ul>
                        <ul className="header-links pull-right">
                            <li><a href="#"><i className="fa fa-user-o"></i> Minha Conta</a></li>
                        </ul>
                    </div>
                </div>
                {/* END TOP HEADER */}
            </header>
        </div>
    );
};
