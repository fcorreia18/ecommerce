import React from 'react';
//Import das imagens
import product01 from '../../../assets/img/product01.png'
import product03 from '../../../assets/img/product03.png';
import product06 from '../../../assets/img/product06.png';
import product08 from '../../../assets/img/product08.png';

export default function MainSectionProduct(params) {
    return (
        <>
            {/* SECTION  */}
            <div className="section">
                {/* container  */}
                <div className="container">
                    {/* row  */}
                    <div className="row">
                        {/* /Imagem principal  */}
                        <div className="col-md-5 col-md-push-2">
                            <div id="product-main-img">
                                <div className="product-preview">
                                    <img src={product01} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* /Imagem principal  */}

                        {/* Imagem do Produto  */}
                        <div className="col-md-2  col-md-pull-5">
                            <div id="product-imgs">
                                <div className="product-preview">
                                    <img src={product01} alt="" />
                                </div>

                                <div className="product-preview">
                                    <img src={product03} alt="" />
                                </div>

                                <div className="product-preview">
                                    <img src={product06} alt="" />
                                </div>

                                <div className="product-preview">
                                    <img src={product08} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* /Imagem do Produto */}

                        {/* Detalhes Produto   */}
                        <div className="col-md-5">
                            <div className="product-details">
                                <h2 className="product-name">Nome do produto vai aqui</h2>
                                <div>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <a className="review-link" href="#">10 revisões | adiciona a tua revisão</a>
                                </div>
                                <div>
                                    <h3 className="product-price">980kz <del className="product-old-price">990kz</del></h3>
                                    <span className="product-available">No Stock</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <div className="product-options">
                                    <label>
                                        Tamanho
									<select className="input-select">
                                            <option value="0">X</option>
                                        </select>
                                    </label>
                                    <label>
                                        Cor
									<select className="input-select">
                                            <option value="0">Vermelho</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="add-to-cart">
                                    <div className="qty-label">
                                        Qtd
									<div className="input-number">
                                            <input type="number" />
                                            <span className="qty-up">+</span>
                                            <span className="qty-down">-</span>
                                        </div>
                                    </div>
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> + Carrinho</button>
                                </div>

                                <ul className="product-btns">
                                    <li><a href="#"><i className="fa fa-heart-o"></i> adicionar a lista de desejos</a></li>
                                    <li><a href="#"><i className="fa fa-exchange"></i> adicionar para comparar</a></li>
                                </ul>

                                <ul className="product-links">
                                    <li>Categoria:</li>
                                    <li><a href="#">Computador</a></li>
                                    <li><a href="#">Acessorios</a></li>
                                </ul>

                                <ul className="product-links">
                                    <li>Partilhar:</li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                </ul>

                            </div>
                        </div>
                        {/* /Product details  */}

                        {/* Product tab  */}
                        <div className="col-md-12">
                            <div id="product-tab">
                                {/* product tab nav  */}
                                <ul className="tab-nav">
                                    <li className="active"><a data-toggle="tab" href="#tab1">Descrição</a></li>
                                    <li><a data-toggle="tab" href="#tab2">Detalhes</a></li>
                                    <li><a data-toggle="tab" href="#tab3">Marcações (3)</a></li>
                                </ul>
                                {/* /product tab nav  */}

                                {/* product tab content  */}
                                <div className="tab-content">
                                    {/* tab1   */}
                                    <div id="tab1" className="tab-pane fade in active">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /tab1   */}

                                    {/* tab2   */}
                                    <div id="tab2" className="tab-pane fade in">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /tab2   */}

                                    {/* tab3   */}
                                    <div id="tab3" className="tab-pane fade in">
                                        <div className="row">
                                            {/* Rating  */}
                                            <div className="col-md-3">
                                                <div id="rating">
                                                    <div className="rating-avg">
                                                        <span>4.5</span>
                                                        <div className="rating-stars">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                    </div>
                                                    <ul className="rating">
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div style={{ width: "80%;" }}></div>
                                                            </div>
                                                            <span className="sum">3</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div style={{ width: "60%;" }}></div>
                                                            </div>
                                                            <span className="sum">2</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
										 /Rating

										 Reviews
										<div className="col-md-6">
                                                <div id="reviews">
                                                    <ul className="reviews">
                                                        <li>
                                                            <div className="review-heading">
                                                                <h5 className="name">Franciso</h5>
                                                                <p className="date">21 SET 2020, 9:46 PM</p>
                                                                <div className="review-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o empty"></i>
                                                                </div>
                                                            </div>
                                                            <div className="review-body">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-heading">
                                                                <h5 className="name">Franciso</h5>
                                                                <p className="date">21 SET 2020, 9:46 PM</p>
                                                                <div className="review-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o empty"></i>
                                                                </div>
                                                            </div>
                                                            <div className="review-body">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-heading">
                                                                <h5 className="name">Franciso</h5>
                                                                <p className="date">21 SET 2020, 9:46 PM</p>
                                                                <div className="review-rating">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o empty"></i>
                                                                </div>
                                                            </div>
                                                            <div className="review-body">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="reviews-pagination">
                                                        <li className="active">1</li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#">4</a></li>
                                                        <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /Reviews  */}

                                            {/* Review Form  */}
                                            <div className="col-md-3">
                                                <div id="review-form">
                                                    <form className="review-form">
                                                        <input className="input" type="text" placeholder="Seu Nome" />
                                                        <input className="input" type="email" placeholder="Seu Email" />
                                                        <textarea className="input" placeholder="Your Review"></textarea>
                                                        <div className="input-rating">
                                                            <span>Your Rating: </span>
                                                            <div className="stars">
                                                                <input id="star5" name="rating" value="5" type="radio" /><label for="star5"></label>
                                                                <input id="star4" name="rating" value="4" type="radio" /><label for="star4"></label>
                                                                <input id="star3" name="rating" value="3" type="radio" /><label for="star3"></label>
                                                                <input id="star2" name="rating" value="2" type="radio" /><label for="star2"></label>
                                                                <input id="star1" name="rating" value="1" type="radio" /><label for="star1"></label>
                                                            </div>
                                                        </div>
                                                        <button className="primary-btn">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* /Review Form  */}
                                        </div>
                                    </div>
                                    {/* /tab3   */}
                                </div>
                                {/* /product tab content   */}
                            </div>
                        </div>
                        {/* /product tab  */}
                    </div>
                    {/* /row  */}
                </div>
                {/* /container  */}
            </div>
            {/* /SECTION  */}
        </>
    );
};
