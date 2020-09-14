import React from 'react';
import '../../assets/css/style.min.css'
import product01 from '../../assets/img/product01.png';
import product02 from '../../assets/img/product02.png';
import product03 from '../../assets/img/product03.png';
import product04 from '../../assets/img/product04.png';
import product05 from '../../assets/img/product05.png';



export default function Products(params) {
    return (
        <div>
            {/* produto  */}
            <div className="product">
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

            {/* produto  */}
            <div class="product">
                <div class="product-img">
                    <img src={product02} alt="" />
                    <div class="product-label">
                        <span class="new">NOVO</span>
                    </div>
                </div>
                <div class="product-body">
                    <p class="product-category">Categoria </p>
                    <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                    <h4 class="product-price">980kz <del class="product-old-price">990kz</del>
                    </h4>
                    <div class="product-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <div class="product-btns">
                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">adiciona a lista de desejos</span></button>
                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">adiciona pra comparar</span></button>
                        <button class="quick-view"><i class="fa fa-eye"></i><span
                            class="tooltipp">quick view</span></button>
                    </div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>+ carrinho</button>
                </div>
            </div>
            {/* /produto */}

            {/* produto */}
            <div class="product">
                <div class="product-img">
                    <img src={product03} alt="" />
                    <div class="product-label">
                        <span class="sale">-30%</span>
                    </div>
                </div>
                <div class="product-body">
                    <p class="product-category">Categoria </p>
                    <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                    <h4 class="product-price">980kz <del class="product-old-price">990kz</del>
                    </h4>
                    <div class="product-rating">
                    </div>
                    <div class="product-btns">
                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">adiciona a lista de desejos</span></button>
                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">adicionar para comparar</span></button>
                        <button class="quick-view"><i class="fa fa-eye"></i><span
                            class="tooltipp">vista rápitda</span></button>
                    </div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>+ carrinho</button>
                </div>
            </div>
            {/* /produto */}

            {/* produto */}
            <div class="product">
                <div class="product-img">
                    <img src={product04} alt="" />
                </div>
                <div class="product-body">
                    <p class="product-category">Categoria </p>
                    <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                    <h4 class="product-price">980kz <del class="product-old-price">990kz</del>
                    </h4>
                    <div class="product-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="product-btns">
                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">adiciona a lista de desejos</span></button>
                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">adicionar para comparar</span></button>
                        <button class="quick-view"><i class="fa fa-eye"></i><span
                            class="tooltipp">vista rápida</span></button>
                    </div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>+ carrinho</button>
                </div>
            </div>
            {/* /produto */}

            {/* produto */}
            <div class="product">
                <div class="product-img">
                    <img src={product05} alt="" />
                </div>
                <div class="product-body">
                    <p class="product-category">Categoria </p>
                    <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                    <h4 class="product-price">980kz <del class="product-old-price">990kz</del>
                    </h4>
                    <div class="product-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="product-btns">
                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">adiciona a lista de desejos</span></button>
                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">adiciona pra comparar</span></button>
                        <button class="quick-view"><i class="fa fa-eye"></i><span
                            class="tooltipp">vista rápida</span></button>
                    </div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>+ carrinho</button>
                </div>
            </div>
            {/* /produto */}

        </div>
    );
};
