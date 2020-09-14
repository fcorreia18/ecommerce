import React from 'react';
import MainHeader from './header/MainHeader';
import NavBar from './navbar/NavBar';
import MainSection from './section/MainSection';
import './App.css';
import '../assets/css/style.min.css'

export default function () {

    return (
        <div>
            <MainHeader />
            <NavBar />
            <MainSection />
        </div>
    );
}
