import React from 'react';

export default function CheckoutBreadcrumb(params) {
    return (
        <>
            {/* BREADCRUMB  */}
            <div id="breadcrumb" className="section">
                {/* container  */}
                <div className="container">
                    {/* row  */}
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="breadcrumb-header">Checkout</h3>
                            <ul className="breadcrumb-tree">
                                <li><a href=" ">Home</a></li>
                                <li className="active">Checkout</li>
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
