import React from 'react';
//Import das imagens
import product01 from '../../../assets/img/product01.png'
import product02 from '../../../assets/img/product02.png';
import product03 from '../../../assets/img/product03.png';
import product04 from '../../../assets/img/product04.png';

export default function RelatedProductSection(params) {
    return (
        <>
            {/* Section  */}
            <div class="section">
                {/* container  */}
                <div class="container">
                    {/* row  */}
                    <div class="row">

                        <div class="col-md-12">
                            <div class="section-title text-center">
                                <h3 class="title">Produtos Relacionados</h3>
                            </div>
                        </div>

                        {/* product  */}
                        <div class="col-md-3 col-xs-6">
                            <div class="product">
                                <div class="product-img">
                                    <img src={product01} alt="" />
                                    <div class="product-label">
                                        <span class="sale">-30%</span>
                                    </div>
                                </div>
                                <div class="product-body">
                                    <p class="product-category">Categoria</p>
                                    <h3 class="product-name"><a href=" ">o nome do produto vai aqui</a></h3>
                                    <h4 class="product-price">980kz<del class="product-old-price">990kz</del></h4>
                                    <div class="product-rating">
                                    </div>
                                    <div class="product-btns">
                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar na lista de desejos</span></button>
                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">comparar</span></button>
                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rápida</span></button>
                                    </div>
                                </div>
                                <div class="add-to-cart">
                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> + carrinho</button>
                                </div>
                            </div>
                        </div>
                        {/* /product */}

                        {/* product */}
                        <div class="col-md-3 col-xs-6">
                            <div class="product">
                                <div class="product-img">
                                    <img src={product02} alt="" />
                                    <div class="product-label">
                                        <span class="new">novo</span>
                                    </div>
                                </div>
                                <div class="product-body">
                                    <p class="product-category">Categoria</p>
                                    <h3 class="product-name"><a href=" ">o nome do produto vai aqui</a></h3>
                                    <h4 class="product-price">980kz<del class="product-old-price">990kz</del></h4>
                                    <div class="product-rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product-btns">
                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar na lista de desejos</span></button>
                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">comparar</span></button>
                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rápida</span></button>
                                    </div>
                                </div>
                                <div class="add-to-cart">
                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> + carrinho</button>
                                </div>
                            </div>
                        </div>
                        {/* /product */}

                        <div class="clearfix visible-sm visible-xs"></div>

                        {/* product */}
                        <div class="col-md-3 col-xs-6">
                            <div class="product">
                                <div class="product-img">
                                    <img src={product03} alt="" />
                                </div>
                                <div class="product-body">
                                    <p class="product-category">Categoria</p>
                                    <h3 class="product-name"><a href=" ">o nome do produto vai aqui</a></h3>
                                    <h4 class="product-price">980kz<del class="product-old-price">990kz</del></h4>
                                    <div class="product-rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <div class="product-btns">
                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar na lista de desejos</span></button>
                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">comparar</span></button>
                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rápida</span></button>
                                    </div>
                                </div>
                                <div class="add-to-cart">
                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> + carrinho</button>
                                </div>
                            </div>
                        </div>
                        {/* /product */}

                        {/* product */}
                        <div class="col-md-3 col-xs-6">
                            <div class="product">
                                <div class="product-img">
                                    <img src={product04} alt="" />
                                </div>
                                <div class="product-body">
                                    <p class="product-category">Categoria</p>
                                    <h3 class="product-name"><a href=" ">o nome do produto vai aqui</a></h3>
                                    <h4 class="product-price">980kz<del class="product-old-price">990kz</del></h4>
                                    <div class="product-rating">
                                    </div>
                                    <div class="product-btns">
                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar na lista de desejos</span></button>
                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">comparar</span></button>
                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rápida</span></button>
                                    </div>
                                </div>
                                <div class="add-to-cart">
                                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> + carrinho</button>
                                </div>
                            </div>
                        </div>
                        {/* /product */}

                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /Section */}

        </>
    );
};
