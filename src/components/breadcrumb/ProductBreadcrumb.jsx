import React from 'react';

export default function ProductBreadcrumb(params) {
    return (
        <>
            {/* BREADCRUMB  */}
            <div id="breadcrumb" className="section">
                {/* container  */}
                <div className="container">
                    {/* row  */}
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><a href="/#">Home</a></li>
                                <li><a href=" ">Todas Categorias</a></li>
                                <li><a href=" ">Acessórios</a></li>
                                <li><a href=" ">Computadores</a></li>
                                <li className="active">O nome do produto vai aqui</li>
                            </ul>
                        </div>
                    </div>
                    {/* /row  */}
                </div>
                {/* /container  */}
            </div>
            {/* /BREADCRUMB  */}
        </>
    );
};
