import React from 'react';
import MainHeader from './header/MainHeader';
import NavBar from './navbar/NavBar';
import Breadcrumb from './breadcrumb/Breadcrumb';
import MainSectionCheckout from './section/checkout/MainSectionCheckout';
import Newsletter from './newsletter/Newsletter';
import Footer from './footer/Footer';

export default function Checkout(params) {
    return (
        <>
            <MainHeader />
            <NavBar />
            <Breadcrumb />
            <MainSectionCheckout />
            <Newsletter />
            <Footer />
        </>
    );
};
