import React from 'react';

export default function Footer(params) {
    const date = new Date().getFullYear();
    return (
        <div>

            {/* FOOTER  */}
            <footer id="footer">
                {/* top footer  */}
                <div class="section">
                    {/* container  */}
                    <div class="container">
                        {/* row  */}
                        <div class="row">
                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Sobre</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut.</p>
                                    <ul class="footer-links">
                                        <li><a href="#"><i class="fa fa-map-marker"></i> Camama/Rua 8</a></li>
                                        <li><a href="#"><i class="fa fa-phone"></i>+244-925-01-26-72</a></li>
                                        <li><a href="francisco.correia1804@gmail.com"><i class="fa fa-envelope-o"></i>francisco.correia1804@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Categorias</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">Promoções</a></li>
                                        <li><a href="#">Laptops</a></li>
                                        <li><a href="#">Smartphones</a></li>
                                        <li><a href="#">Cameras</a></li>
                                        <li><a href="#">Accessórios</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="clearfix visible-xs"></div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Informação</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">Sobre nós</a></li>
                                        <li><a href="#">Contacta-nos</a></li>
                                        <li><a href="#">Politica de privacidade</a></li>
                                        <li><a href="#">Encomendas e entregas</a></li>
                                        <li><a href="#">Termos & Condições</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Serviço</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">Minha Conta</a></li>
                                        <li><a href="#">Ver Carrinho</a></li>
                                        <li><a href="#">Lista de desejos</a></li>
                                        <li><a href="#">Ver as minhas ordens </a></li>
                                        <li><a href="#">Ajuda</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /row  */}
                    </div>
                    {/* /container  */}
                </div>
                {/* /top footer  */}

                {/* bottom footer  */}
                <div id="bottom-footer" class="section">
                    <div class="container">
                        {/* row  */}
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <ul class="footer-payments">
                                    <li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
                                    <li><a href="#"><i class="fa fa-credit-card"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
                                </ul>
                                <span class="copyright">

                                    Copyright &copy;
							<script></script> todos direitos reservados por: <a
                                        href="https://github.com/FranciscoCorreia28" target="_blank">Francisco Correia</a>

                                </span>
                            </div>
                        </div>
                        {/* /row  */}
                    </div>
                    {/* /container  */}
                </div>
                {/* /bottom footer  */}
            </footer>
            {/* /FOOTER  */}

        </div>
    );
};
