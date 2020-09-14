import React from 'react';
import '../../assets/css/style.min.css'
import TopHeader from "./TopHeader";
import Header from "./Header";

export default function MainHeader(params) {
    return (
        <div>
            <TopHeader />
            <Header />
        </div>
    );
};
