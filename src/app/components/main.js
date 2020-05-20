import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import { ConnectedDashBoard } from './dashboard';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './navigation';
import { ConnectedTaskDetail } from './taskDetail';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                <Route
                    exact
                    path="/dashboard"
                    render={
                        () =>
                            (
                                <div>
                                    <ConnectedDashBoard />
                                </div>
                            )}>
                </Route>
                <Route
                    exact
                    path="/task/:id"
                    render={({ match }) => (<div><ConnectedTaskDetail match={match} /></div>)}>
                </Route>
            </div>
        </Provider>
    </Router>
)