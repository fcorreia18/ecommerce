import React from 'react';
import Home from './Home';
import Store from './Store';
import Product from './Product';
import Checkout from './Checkout';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

export default function () {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/store" component={Store} />
                    <Route path="/product" component={Product} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </div>
        </Router>
    );
}
