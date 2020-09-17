import React from 'react';
import TopCategories from './TopCategories';
import SectionTitle from './SectionTitle';
import Products from './Products';
import Banner from '../banner/Banner';
import Carousel from 'react-elastic-carousel';


import '../App.css';

export default function MainSection(params) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 }
    ]
    return (
        <div>
            <TopCategories />
            {/* SECTION */}
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <SectionTitle Name={"Novos Produtos"} />

                        {/* Tab de produtos & slick */}
                        <div className="col-md-12">
                            <div className="row">
                                <div className="products-tabs">
                                    {/* tab */}
                                    <div id="tab1" className="tab-pane active">
                                        <div className="products-slick" data-nav="#slick-nav-1">
                                            <Carousel breakPoints={breakPoints}
                                                enableAutoPlay={true}
                                                autoPlaySpeed={3500}
                                                showArrows={false}
                                                renderArrow={false}
                                                pagination={false}>
                                                <Products />
                                                <Products />
                                                <Products />
                                                <Products />
                                                <Products />
                                                <Products />
                                                <Products />
                                                <Products />
                                            </Carousel>
                                        </div>
                                        <div id="slick-nav-1" className="products-slick-nav" >
                                        </div>

                                    </div>
                                    {/* /tab */}
                                </div>
                            </div>
                        </div>
                        {/* Products tab & slick */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /SECTION */}
            <Banner />
            {/* SECTION */}
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <SectionTitle Name={"Mais Vendidos"} />

                        {/* Tab de produtos & slick */}
                        <div className="col-md-12">
                            <div className="row">
                                <div className="products-tabs">
                                    {/* tab */}
                                    <div id="tab1" className="tab-pane active">
                                        <div className="products-slick" data-nav="#slick-nav-1">
                                            <Carousel breakPoints={breakPoints}
                                                enableAutoPlay={true}
                                                autoPlaySpeed={3500}
                                                showArrows={false}
                                                renderArrow={false}
                                                pagination={false}>
                                                <Products discount={-30} type={"new"} image={"product01"} />
                                                <Products type={"new"} image={"product02"} />
                                                <Products type={"new"} image={"product03"} />
                                                <Products />
                                                <Products discount={-10} type={"new"} image={"product04"} />
                                                <Products />
                                                <Products discount={-30} image={"product05"} />
                                                <Products discount={-30} type={"new"} image={"product03"} />
                                            </Carousel>
                                        </div>
                                        <div id="slick-nav-1" className="products-slick-nav" >
                                        </div>

                                    </div>
                                    {/* /tab */}
                                </div>
                            </div>
                        </div>
                        {/* Products tab & slick */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /SECTION */}
        </div>
    );
};
