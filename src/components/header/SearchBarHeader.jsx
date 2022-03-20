import React from 'react';


export default function SearchBarHeader(params) {
    return (
        <div>

            {/* BARRA DE PESQUISA */}
            <div className="col-md-6">
                <div className="header-search">
                    <form>
                        <div className="row search-bar">
                            <ul>
                                <li>
                                    <select className="input-select">
                                        <option value="0">Todas Categorias</option>
                                        <option value="1">Sapatos</option>
                                        <option value="1">Acessórios</option>
                                    </select>

                                </li>
                                <input className="input search" placeholder="pesquisa pelo nome do produto" />
                                <li>
                                    <button className="search-btn">pesquisar</button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>

            </div>
            {/* /BARRA DE PESQUISA */}

        </div>
    );
};
