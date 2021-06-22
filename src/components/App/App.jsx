import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Post } from '../Post/Post';
import { Feed } from '../Feed/Feed';

export const App = () => {

    return (
        <Switch>
            <Route path="/post/:id">
                <Post/>
            </Route>
            <Route path="/">
                <Feed/>
            </Route>
        </Switch>
    );
};
