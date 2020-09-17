import React from 'react';
import MainHeader from './header/MainHeader';
import NavBar from './navbar/NavBar';
import MainSection from './section/MainSection';
import Newsletter from './newsletter/Newsletter';
import './App.css';

export default function () {

    return (
        <div>
            <MainHeader />
            <NavBar />
            <MainSection />
            <Newsletter />
        </div>
    );
}
