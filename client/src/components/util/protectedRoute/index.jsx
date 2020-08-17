import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { user } from '../../../store';
import { useRecoilValue } from 'recoil';

export default ({ component: Component, ...rest }) => {
    let userState = useRecoilValue(user);
    if (!userState) return <Route {...rest} render={props => { return <Component props /> }}></Route>
    return <Route {...rest} render={props => <Redirect to={'/app'} />}></Route>
}