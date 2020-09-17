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
                                        <li><a href="https://gmail.com/send-mail/francisco.correia1804@gmail.com" target="_blank"><i class="fa fa-envelope-o"></i>francisco.correia1804@gmail.com</a></li>
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
                        <div class="social-links-warp">
                            <div class="container">
                                <div class="social-links">
                                    <a href="https://gmail.com/send-mail/francisco.correia1804@gmail.com" target="_blank" class="google-plus"><i class="fa fa-google-plus"></i><span>g+plus</span></a>
                                    <a href="https://­www.linkedin.com/in/­francisco-correia-239­3411a4" target="_blank" class="tumblr"><i class="fa fa-linkedin"></i><span>Linkedin</span></a>
                                    <a href="" class="instagram"><i class="fa fa-instagram"></i><span>instagram</span></a>
                                    <a href="https://github.com/FranciscoCorreia28" target="_blank" class="pinterest"><i class="fa fa-github"></i><span>GitHub</span></a>
                                    <a href="https://web.facebook.com/franciscomartins.martins.5686/" target="_blank" class="facebook"><i class="fa fa-facebook"></i><span>facebook</span></a>
                                    <a href="" class="twitter"><i class="fa fa-twitter"></i><span>twitter</span></a>
                                    <a href="" class="youtube"><i class="fa fa-youtube"></i><span>youtube</span></a>
                                </div>

                                <p class="text-white text-center mt-5" style={{ fontSize: ".9em" }} >Copyright &copy;
                                {date} todos direitos reservados por: <a
                                        href="https://­www.linkedin.com/in/­francisco-correia-239­3411a4" target="_blank">FRANCISCO CORREIA</a></p>
                            </div>
                        </div>
                    </div>
                    {/* /container  */}
                </div>
                {/* /bottom footer  */}
            </footer>
            {/* /FOOTER  */}

        </div>
    );
};
