import React from 'react';
import TopCategories from './TopCategories';
import SectionTitle from './SectionTitle';
import Products from './Products';
import '../../assets/css/style.min.css'

export default function MainSection(params) {
    return (
        <div>
            <TopCategories />
            {/* SECTION */}
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <SectionTitle />

                        {/* Tab de produtos & slick */}
                        <div className="col-md-12">
                            <div className="row">
                                <div className="products-tabs">
                                    {/* tab */}
                                    <div id="tab1" className="tab-pane active">
                                        <div className="products-slick" data-nav="#slick-nav-1">
                                            <Products />
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
