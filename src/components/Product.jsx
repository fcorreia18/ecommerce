import React from 'react';
import MainHeader from './header/MainHeader';
import NavBar from './navbar/NavBar';
import ProductBreadcrumb from './breadcrumb/ProductBreadcrumb';
import MainSectionProduct from './section/product/MainSectionProduct';
import Newsletter from './newsletter/Newsletter';
import Footer from './footer/Footer';

export default function Product(params) {
    return (
        <>
            <MainHeader />
            <NavBar />
            <ProductBreadcrumb />
            <MainSectionProduct />
            <Newsletter />
            <Footer />
        </>
    );
};