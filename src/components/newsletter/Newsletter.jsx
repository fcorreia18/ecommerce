import React from 'react';

export default function newsletter(params) {
    return (
        <div>
            {/* NEWSLETTER  */}
            <div id="newsletter" class="section">
                {/* container  */}
                <div class="container">
                    {/* row  */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="newsletter">
                                <p> Receba as nossas novidades <strong>Toda semana</strong></p>
                                <form>
                                    <input class="input" type="email" placeholder="Insira o seu email" />
                                    <button class="newsletter-btn"><i class="fa fa-envelope"></i> Enviar</button>
                                </form>
                                <ul class="newsletter-follow">
                                    <li>
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /row  */}
                </div>
                {/* /container  */}
            </div>
            {/* /NEWSLETTER  */}
        </div>
    );
};
