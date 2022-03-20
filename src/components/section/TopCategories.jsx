import React from 'react';

//Importando as imagens
import shop01 from '../../assets/img/shop01.png';
import shop02 from '../../assets/img/shop02.png';
import shop03 from '../../assets/img/shop03.png';

export default function TopCategories(params) {
    return (
        <div>

            {/* SECTION  */}
            <div className="section">
                {/* container  */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        {/* shop */}
                        <div className="col-md-4 col-xs-6">
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={shop01} alt="" />
                                </div>
                                <div className="shop-body">
                                    <h3>Laptop<br />Colecção</h3>
                                    <a href=" " className="cta-btn">Encomende Agora <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* /shop */}

                        {/* shop */}
                        <div className="col-md-4 col-xs-6">
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={shop03} alt="" />
                                </div>
                                <div className="shop-body">
                                    <h3>Accessorios<br />Colecção</h3>
                                    <a href=" " className="cta-btn">Encomende Agora <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* /shop */}

                        {/* shop */}
                        <div className="col-md-4 col-xs-6">
                            <div className="shop">
                                <div className="shop-img">
                                    <img src={shop02} alt="" />
                                </div>
                                <div className="shop-body">
                                    <h3>Cameras<br />Colecção</h3>
                                    <a href=" " className="cta-btn">Encomende Agora <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* /shop */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /SECTION */}
        </div>
    );
};
