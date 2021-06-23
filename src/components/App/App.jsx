import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import useStyles from 'isomorphic-style-loader/useStyles';

import { routes } from '../../router';

import styles from './styles.module.scss';

export const App = () => {
    useStyles(styles);
    
    return (
        <div className={styles.root}>
            <NavLink to="/" exact className={styles.headerLink}>
                <h1>Хабр</h1>
            </NavLink>
            <Switch>
                {routes.map((route) => (
                    <Route path={route.path} key={route.path}>
                        <route.component loadData={route.loadData} />
                    </Route>
                ))}
            </Switch>
        </div>
    );
};
