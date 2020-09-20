import React from 'react';
import MainHeader from './header/MainHeader';
import NavBar from './navbar/NavBar';
import StoreBreadcrumb from './breadcrumb/StoreBreadcrumb';
import MainSectionStore from './section/store/MainSectionStore';
import Newsletter from './newsletter/Newsletter';
import Footer from './footer/Footer';

export default function Store(params) {
    return (
        <>
            <MainHeader />
            <NavBar />
            <StoreBreadcrumb />
            <MainSectionStore />
            <Newsletter />
            <Footer />
        </>
    );
};