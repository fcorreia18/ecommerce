import React from 'react';

export default function MainSectionCheckout(params) {
    return (
        <>
            {/* SECTION */}
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">

                        <div className="col-md-7">
                            {/* Dados do comprador */}
                            <div className="billing-details">
                                <div className="section-title">
                                    <h3 className="title">Dados do comprador</h3>
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="first-name" placeholder="Primeiro Nome" />
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="last-name" placeholder="Ultimo Nome" />
                                </div>
                                <div className="form-group">
                                    <input className="input" type="email" name="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="address" placeholder="Endereço" />
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="city" placeholder="Cidade" />
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="country" placeholder="Pais" />
                                </div>
                                <div className="form-group">
                                    <input className="input" type="text" name="zip-code" placeholder="Nº Bilhete" />
                                </div>
                                <div className="form-group">
                                    <input className="input" type="tel" name="tel" placeholder="Telemóvel" />
                                </div>
                                <div className="form-group">
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="create-account" />
                                        <label for="create-account">
                                            <span></span>
										Criar uma conta?
									</label>
                                        <div className="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                            <input className="input" type="password" name="password" placeholder="coloque a tua palavra passe" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Dados do comprador */}

                            {/*  Dados de entrega */}
                            <div className="shiping-details">
                                <div className="section-title">
                                    <h3 className="title">Dados de entrega</h3>
                                </div>
                                <div className="input-checkbox">
                                    <input type="checkbox" id="shiping-address" />
                                    <label for="shiping-address">
                                        <span></span>
									Fazer entrega num endereço diferente?
								</label>
                                    <div className="caption">
                                        <div className="form-group">
                                            <input className="input" type="text" name="first-name" placeholder="Primeiro Nome" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="last-name" placeholder="Ultimo Nome" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="email" name="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="address" placeholder="Endereço" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="city" placeholder="Cidade" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="country" placeholder="Pais" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="zip-code" placeholder="Nº Bilhete" />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="tel" name="tel" placeholder="Telemóvel" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* / Dados de entrega */}

                            {/* Notas de entrega*/}
                            <div className="order-notes">
                                <textarea className="input" placeholder="Notas de entrega"></textarea>
                            </div>
                            {/* /Notas de entrega */}
                        </div>

                        {/* Detalhes de compra */}
                        <div className="col-md-5 order-details">
                            <div className="section-title text-center">
                                <h3 className="title">Tua Compra</h3>
                            </div>
                            <div className="order-summary">
                                <div className="order-col">
                                    <div><strong>PRODUTO</strong></div>
                                    <div><strong>TOTAL</strong></div>
                                </div>
                                <div className="order-products">
                                    <div className="order-col">
                                        <div>1x nome do produto vai aqui</div>
                                        <div>980kz</div>
                                    </div>
                                    <div className="order-col">
                                        <div>2x nome do produto vai aqui</div>
                                        <div>980kz</div>
                                    </div>
                                </div>
                                <div className="order-col">
                                    <div>Entrega</div>
                                    <div><strong>GRATUITA</strong></div>
                                </div>
                                <div className="order-col">
                                    <div><strong>TOTAL</strong></div>
                                    <div><strong className="order-total">2940kz</strong></div>
                                </div>
                            </div>
                            <div className="payment-method">
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-1" />
                                    <label for="payment-1">
                                        <span></span>
									Transferência bancaria directa
								</label>
                                    <div className="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-2" />
                                    <label for="payment-2">
                                        <span></span>
									Pagamento em cheque
								</label>
                                    <div className="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="input-radio">
                                    <input type="radio" name="payment" id="payment-3" />
                                    <label for="payment-3">
                                        <span></span>
									Pagamento com cartão virtual
								</label>
                                    <div className="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="input-checkbox">
                                <input type="checkbox" id="terms" />
                                <label for="terms">
                                    <span></span>
								Eu li e aceito os  <a href="#">termos e condições</a>
                                </label>
                            </div>
                            <a href="#" className="primary-btn order-submit">Confirmar compra</a>
                        </div>
                        {/* /Detalhes de compra */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>
            {/* /SECTION */}

        </>
    );
};
