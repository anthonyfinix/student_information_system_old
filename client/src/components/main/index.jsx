import React from 'react';
import Sidebar from '../sidebar'
import './main.css';
import Box from '@material-ui/core/Box';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Student from './student';
import Dashboard from './dashboard';
import StudentProvider from './student/context';

export default () => {
    let { path } = useRouteMatch();
    return (
        <Box id="main-wrapper" display="flex">
            <StudentProvider>
                <Sidebar></Sidebar>
                <Switch>
                    <Route exact path={path} component={Dashboard} />
                    <Route exact path={path + '/students'} component={Student} />
                </Switch>
            </StudentProvider>
        </Box>
    )
}