import React from 'react';
import '../../assets/css/style.min.css'


export default function LogoHeader(params) {
    return (
        <div>
            {/* LOGO */}
            <div className="col-md-3">
                <div className="header-logo">
                    <a href="#" className="logo">
                        <h1 style={{ color: "#fff" }}>LOGO DA EMPRESA</h1>
                    </a>
                </div>
            </div>
            {/* END LOGO */}
        </div>
    );
};
