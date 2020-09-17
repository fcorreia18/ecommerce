import React from 'react';

import product01 from '../../assets/img/product01.png';
import product02 from '../../assets/img/product02.png';
import product03 from '../../assets/img/product03.png';
import product04 from '../../assets/img/product04.png';
import product05 from '../../assets/img/product05.png';



export default function Products(params) {
    return (
        <div>
            {/* produto  */}
            <div className="product" style={{ margin: "2% 4% 22% 4%", }}>
                <div className="product-img">
                    <img src={product01} alt="" />
                    <div className="product-label">
                        <span className="sale">-30%</span>
                        <span className="new">NOVO</span>
                    </div>
                </div>
                <div />
                <div className="product-body">
                    <p className="product-category">Categoria </p>
                    <h3 className="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                    <h4 className="product-price">980kz <del className="product-old-price">990kz</del>
                    </h4>
                    <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span
                            className="tooltipp">adiciona na lista de desejos</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span
                            className="tooltipp">adiciona pra comparar</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span
                            className="tooltipp">vista rápida</span></button>
                    </div>
                </div>
                <div className="add-to-cart">
                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> + carrinho</button>
                </div>
            </div>
            {/* /produto  */}

        </div>
    );
};
