import React from 'react';
import '../../assets/css/style.min.css'


export default function HeaderAccount(params) {
    return (
        <div>

            {/* Conta */}
            <div class="col-md-3 clearfix">
                <div class="header-ctn">
                    {/* lista de desejos */}
                    <div>
                        <a href="#">
                            <i class="fa fa-heart-o"></i>
                            <span>tua lista de desejos</span>
                            <div class="qty">2</div>
                        </a>
                    </div>
                    {/* /lista de desejos */}

                    {/* Carrinho */}
                    <div class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                            <i class="fa fa-shopping-cart"></i>
                            <span>Teu carrinho de compras</span>
                            <div class="qty">3</div>
                        </a>
                        <div class="cart-dropdown">
                            <div class="cart-list">
                                <div class="product-widget">
                                    <div class="product-img">
                                        <img src="./img/product01.png" alt="" />
                                    </div>
                                    <div class="product-body">
                                        <h3 class="product-name"><a href="#">O nome do produto vai aqui</a></h3>
                                        <h4 class="product-price"><span class="qty">1x</span>980kz</h4>
                                    </div>
                                    <button class="delete"><i class="fa fa-close"></i></button>
                                </div>

                                <div class="product-widget">
                                    <div class="product-img">
                                        <img src="./img/product02.png" alt="" />
                                    </div>
                                    <div class="product-body">
                                        <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                        <h4 class="product-price"><span class="qty">3x</span>980kz</h4>
                                    </div>
                                    <button class="delete"><i class="fa fa-close"></i></button>
                                </div>
                            </div>
                            <div class="cart-summary">
                                <small>3 Item(s) selecionados</small>
                                <h5>SUBTOTAL: 2940kz</h5>
                            </div>
                            <div class="cart-btns">
                                <a href="#">Ver Carrinho</a>
                                <a href="#">Checkout <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* /Carrinho */}

                    {/* Menu Toogle */}
                    <div class="menu-toggle">
                        <a href="#">
                            <i class="fa fa-bars"></i>
                            <span>Menu</span>
                        </a>
                    </div>
                    {/* /Menu Toogle */}
                </div>
            </div>
            {/* /Conta */}
        </div>
    );
};
