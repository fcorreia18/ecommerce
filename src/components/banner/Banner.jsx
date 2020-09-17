import React from 'react';

export default function Banner(params) {
    return (
        <div>
            {/* Secção de banner informativo  */}
            <div id="hot-deal" class="section">
                {/* container  */}
                <div class="container">
                    {/* row  */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hot-deal">
                                <ul class="hot-deal-countdown">
                                    <li>
                                        <div>
                                            <h3>02</h3>
                                            <span>Dias</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>10</h3>
                                            <span>Horas</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>34</h3>
                                            <span>Mins</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>60</h3>
                                            <span>Segs</span>
                                        </div>
                                    </li>
                                </ul>
                                <h2 class="text-uppercase">vejas as promoções dessa</h2>
                                <p>Nova colecção com até 50% de desconto</p>
                                <a class="primary-btn cta-btn" href="#">Encomende agora</a>
                            </div>
                        </div>
                    </div>
                    {/* /row  */}
                </div>
                {/* /container  */}
            </div>
            {/* /Secção de banner informativo  */}
        </div>
    );
};
