import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '../../router';

export const App = () => {
    return (
        <Switch>
            {routes.map((route) => (
                <Route path={route.path} key={route.path}>
                    <route.component loadData={route.loadData} />
                </Route>
            ))}
        </Switch>
    );
};
