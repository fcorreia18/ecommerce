import React from 'react';
//Import das imagens
import product01 from '../../../assets/img/product01.png'
import product02 from '../../../assets/img/product02.png';
import product03 from '../../../assets/img/product03.png';
import product04 from '../../../assets/img/product04.png';
import product05 from '../../../assets/img/product05.png';
import product06 from '../../../assets/img/product06.png';
import product07 from '../../../assets/img/product07.png';
import product08 from '../../../assets/img/product08.png';
import product09 from '../../../assets/img/product09.png';

export default function MainSectionStore(params) {
    return (
        <>
            {/* SECTION  */}
            <div class="section">
                {/* container  */}
                <div class="container">
                    {/* row  */}
                    <div class="row">
                        {/* ASIDE  */}
                        <div id="aside" class="col-md-3">
                            {/* aside Widget  */}
                            <div class="aside">
                                <h3 class="aside-title">Categorias</h3>
                                <div class="checkbox-filter">

                                    <div class="input-checkbox">
                                        <input type="checkbox" id="category-1" />
                                        <label for="category-1">
                                            <span></span>
										Portatil
										<small>(120)</small>
                                        </label>
                                    </div>

                                    <div class="input-checkbox">
                                        <input type="checkbox" id="category-2" />
                                        <label for="category-2">
                                            <span></span>
										Telemóveis
										<small>(740)</small>
                                        </label>
                                    </div>

                                    <div class="input-checkbox">
                                        <input type="checkbox" id="category-3" />
                                        <label for="category-3">
                                            <span></span>
										Cameras
										<small>(1450)</small>
                                        </label>
                                    </div>

                                    <div class="input-checkbox">
                                        <input type="checkbox" id="category-4" />
                                        <label for="category-4">
                                            <span></span>
										Acessórios
										<small>(578)</small>
                                        </label>
                                    </div>

                                    <div class="input-checkbox">
                                        <input type="checkbox" id="category-5" />
                                        <label for="category-5">
                                            <span></span>
										Computadores
										<small>(120)</small>
                                        </label>
                                    </div>

                                    <div class="input-checkbox">
                                        <input type="checkbox" id="category-6" />
                                        <label for="category-6">
                                            <span></span>
										Telemóveis
										<small>(740)</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* /aside Widget  */}

                            {/* aside Widget  */}
                            <div class="aside">
                                <h3 class="aside-title">Preço</h3>
                                <div class="price-filter">
                                    <div id="price-slider"></div>
                                    <div class="input-number price-min">
                                        <input id="price-min" type="number" />
                                        <span class="qty-up">+</span>
                                        <span class="qty-down">-</span>
                                    </div>
                                    <span>-</span>
                                    <div class="input-number price-max">
                                        <input id="price-max" type="number" />
                                        <span class="qty-up">+</span>
                                        <span class="qty-down">-</span>
                                    </div>
                                </div>
                            </div>
                            {/* /aside Widget  */}

                            {/* aside Widget  */}
                            <div class="aside">
                                <h3 class="aside-title">Marca</h3>
                                <div class="checkbox-filter">
                                    <div class="input-checkbox">
                                        <input type="checkbox" id="brand-1" />
                                        <label for="brand-1">
                                            <span></span>
										SAMSUNG
										<small>(578)</small>
                                        </label>
                                    </div>
                                    <div class="input-checkbox">
                                        <input type="checkbox" id="brand-2" />
                                        <label for="brand-2">
                                            <span></span>
										LG
										<small>(125)</small>
                                        </label>
                                    </div>
                                    <div class="input-checkbox">
                                        <input type="checkbox" id="brand-3" />
                                        <label for="brand-3">
                                            <span></span>
										SONY
										<small>(755)</small>
                                        </label>
                                    </div>
                                    <div class="input-checkbox">
                                        <input type="checkbox" id="brand-4" />
                                        <label for="brand-4">
                                            <span></span>
										SAMSUNG
										<small>(578)</small>
                                        </label>
                                    </div>
                                    <div class="input-checkbox">
                                        <input type="checkbox" id="brand-5" />
                                        <label for="brand-5">
                                            <span></span>
										LG
										<small>(125)</small>
                                        </label>
                                    </div>
                                    <div class="input-checkbox">
                                        <input type="checkbox" id="brand-6" />
                                        <label for="brand-6">
                                            <span></span>
										SONY
										<small>(755)</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* /aside Widget */}

                            {/* aside Widget */}
                            <div class="aside">
                                <h3 class="aside-title">Mais vendidos</h3>
                                <div class="product-widget">
                                    <div class="product-img">
                                        <img src={product01} alt="" />
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">Categoria</p>
                                        <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                        <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                    </div>
                                </div>

                                <div class="product-widget">
                                    <div class="product-img">
                                        <img src={product02} alt="" />
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">Categoria</p>
                                        <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                        <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                    </div>
                                </div>

                                <div class="product-widget">
                                    <div class="product-img">
                                        <img src={product03} alt="" />
                                    </div>
                                    <div class="product-body">
                                        <p class="product-category">Categoria</p>
                                        <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                        <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                    </div>
                                </div>
                            </div>
                            {/* /aside Widget */}
                        </div>
                        {/* /ASIDE */}

                        {/* STORE */}
                        <div id="store" class="col-md-9">
                            {/* store top filter */}
                            <div class="store-filter clearfix">
                                <div class="store-sort">
                                    <label>
                                        busca por:
									<select class="input-select">
                                            <option value="0">Popular</option>
                                            <option value="1">mais barato</option>
                                        </select>
                                    </label>

                                    <label>
                                        Mostrar:
									<select class="input-select">
                                            <option value="0">20</option>
                                            <option value="1">50</option>
                                        </select>
                                    </label>
                                </div>
                                <ul class="store-grid">
                                    <li class="active"><i class="fa fa-th"></i></li>
                                    <li><a href="#"><i class="fa fa-th-list"></i></a></li>
                                </ul>
                            </div>
                            {/* /store top filter */}

                            {/* store products */}
                            <div class="row">
                                {/* product */}
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product01} alt="" />
                                            <div class="product-label">
                                                <span class="sale">-30%</span>
                                                <span class="new">NOVO</span>
                                            </div>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
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
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product02} alt="" />
                                            <div class="product-label">
                                                <span class="new">NOVO</span>
                                            </div>
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-o"></i>
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
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
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product03} alt="" />
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
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

                                <div class="clearfix visible-lg visible-md"></div>

                                {/* product */}
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product04} alt="" />
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
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
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product05} alt="" />
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
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
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product06} alt="" />
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-o"></i>
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
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

                                <div class="clearfix visible-lg visible-md visible-sm visible-xs"></div>

                                {/* product */}
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product07} alt="" />
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
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
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product08} alt="" />
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
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
                                <div class="col-md-4 col-xs-6">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src={product09} alt="" />
                                        </div>
                                        <div class="product-body">
                                            <p class="product-category">Categoria</p>
                                            <h3 class="product-name"><a href="#">o nome do produto vai aqui</a></h3>
                                            <h4 class="product-price">980kz <del class="product-old-price">990kz</del></h4>
                                            <div class="product-rating">
                                            </div>
                                            <div class="product-btns">
                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">adicionar a lista de desejos</span></button>
                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">comparar</span></button>
                                                <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">vista rápida</span></button>
                                            </div>
                                        </div>
                                        <div class="add-to-cart">
                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> + carrinho</button>
                                        </div>
                                    </div>
                                </div>
                                {/* /product  */}
                            </div>
                            {/* /store products  */}

                            {/* store bottom filter  */}
                            <div class="store-filter clearfix">
                                <span class="store-qty">Mostrando 20-100 produtos</span>
                                <ul class="store-pagination">
                                    <li class="active">1</li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                            {/* /store bottom filter  */}
                        </div>
                        {/* /STORE  */}
                    </div>
                    {/* /row  */}
                </div>
                {/* /container  */}
            </div>
            {/* /SECTION  */}
        </>
    );
};
