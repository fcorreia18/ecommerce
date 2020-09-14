import React from 'react';
import '../../assets/css/style.min.css'

export default function SectionTitle(params) {
    return (
        <div>
            {/* titulo da section */}
            <div className="col-md-12">
                <div className="section-title">
                    <h3 className="title">Novos Produtos</h3>
                    <div className="section-nav">
                        <ul className="section-tab-nav tab-nav">
                            <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                            <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                            <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                            <li><a data-toggle="tab" href="#tab1">Accessorios</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* /titulo da section */}

        </div>
    );
};
