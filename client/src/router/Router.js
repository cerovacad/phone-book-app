import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App'
import NotFound from '../components/NotFound'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;