import React from 'react';
import LogoHeader from './LogoHeader';
import SearchBarHeader from './SearchBarHeader';
import HeaderAccount from './HeaderAccount';


export default function Header(params) {
    return (
        <div>
            {/* HEADER PRINCIPAL */}
            <div id="header">
                {/* container */}
                <div class="container">
                    {/* row */}
                    <div class="row">
                        <LogoHeader />
                        <SearchBarHeader />
                        <HeaderAccount />
                    </div>
                    {/* row */}
                </div>
            </div>
            {/* container */}
            {/* / HEADER PRINCIAL */}
        </div>
    );
};
