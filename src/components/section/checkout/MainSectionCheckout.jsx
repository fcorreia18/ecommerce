import React from 'react';

export default function MainSectionCheckout(params) {
    return (
        <>
            {/* SECTION */}
            <div class="section">
                {/* container */}
                <div class="container">
                    {/* row */}
                    <div class="row">

                        <div class="col-md-7">
                            {/* Dados do comprador */}
                            <div class="billing-details">
                                <div class="section-title">
                                    <h3 class="title">Dados do comprador</h3>
                                </div>
                                <div class="form-group">
                                    <input class="input" type="text" name="first-name" placeholder="Primeiro Nome" />
                                </div>
                                <div class="form-group">
                                    <input class="input" type="text" name="last-name" placeholder="Ultimo Nome" />
                                </div>
                                <div class="form-group">
                                    <input class="input" type="email" name="email" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input class="input" type="text" name="address" placeholder="Endereço" />
                                </div>
                                <div class="form-group">
                                    <input class="input" type="text" name="city" placeholder="Cidade" />
                                </div>
                                <div class="form-group">
                                    <input class="input" type="text" name="country" placeholder="Pais" />
                                </div>
                                <div class="form-group">
                                    <input class="input" type="text" name="zip-code" placeholder="Nº Bilhete" />
                                </div>
                                <div class="form-group">
                                    <input class="input" type="tel" name="tel" placeholder="Telemóvel" />
                                </div>
                                <div class="form-group">
                                    <div class="input-checkbox">
                                        <input type="checkbox" id="create-account" />
                                        <label for="create-account">
                                            <span></span>
										Criar uma conta?
									</label>
                                        <div class="caption">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                            <input class="input" type="password" name="password" placeholder="coloque a tua palavra passe" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Dados do comprador */}

                            {/*  Dados de entrega */}
                            <div class="shiping-details">
                                <div class="section-title">
                                    <h3 class="title">Dados de entrega</h3>
                                </div>
                                <div class="input-checkbox">
                                    <input type="checkbox" id="shiping-address" />
                                    <label for="shiping-address">
                                        <span></span>
									Fazer entrega num endereço diferente?
								</label>
                                    <div class="caption">
                                        <div class="form-group">
                                            <input class="input" type="text" name="first-name" placeholder="Primeiro Nome" />
                                        </div>
                                        <div class="form-group">
                                            <input class="input" type="text" name="last-name" placeholder="Ultimo Nome" />
                                        </div>
                                        <div class="form-group">
                                            <input class="input" type="email" name="email" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <input class="input" type="text" name="address" placeholder="Endereço" />
                                        </div>
                                        <div class="form-group">
                                            <input class="input" type="text" name="city" placeholder="Cidade" />
                                        </div>
                                        <div class="form-group">
                                            <input class="input" type="text" name="country" placeholder="Pais" />
                                        </div>
                                        <div class="form-group">
                                            <input class="input" type="text" name="zip-code" placeholder="Nº Bilhete" />
                                        </div>
                                        <div class="form-group">
                                            <input class="input" type="tel" name="tel" placeholder="Telemóvel" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* / Dados de entrega */}

                            {/* Notas de entrega*/}
                            <div class="order-notes">
                                <textarea class="input" placeholder="Notas de entrega"></textarea>
                            </div>
                            {/* /Notas de entrega */}
                        </div>

                        {/* Detalhes de compra */}
                        <div class="col-md-5 order-details">
                            <div class="section-title text-center">
                                <h3 class="title">Tua Compra</h3>
                            </div>
                            <div class="order-summary">
                                <div class="order-col">
                                    <div><strong>PRODUTO</strong></div>
                                    <div><strong>TOTAL</strong></div>
                                </div>
                                <div class="order-products">
                                    <div class="order-col">
                                        <div>1x nome do produto vai aqui</div>
                                        <div>980kz</div>
                                    </div>
                                    <div class="order-col">
                                        <div>2x nome do produto vai aqui</div>
                                        <div>980kz</div>
                                    </div>
                                </div>
                                <div class="order-col">
                                    <div>Entrega</div>
                                    <div><strong>GRATUITA</strong></div>
                                </div>
                                <div class="order-col">
                                    <div><strong>TOTAL</strong></div>
                                    <div><strong class="order-total">2940kz</strong></div>
                                </div>
                            </div>
                            <div class="payment-method">
                                <div class="input-radio">
                                    <input type="radio" name="payment" id="payment-1" />
                                    <label for="payment-1">
                                        <span></span>
									Transferência bancaria directa
								</label>
                                    <div class="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="input-radio">
                                    <input type="radio" name="payment" id="payment-2" />
                                    <label for="payment-2">
                                        <span></span>
									Pagamento em cheque
								</label>
                                    <div class="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div class="input-radio">
                                    <input type="radio" name="payment" id="payment-3" />
                                    <label for="payment-3">
                                        <span></span>
									Pagamento com cartão virtual
								</label>
                                    <div class="caption">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="input-checkbox">
                                <input type="checkbox" id="terms" />
                                <label for="terms">
                                    <span></span>
								Eu li e aceito os  <a href="#">termos e condições</a>
                                </label>
                            </div>
                            <a href="#" class="primary-btn order-submit">Confirmar compra</a>
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
