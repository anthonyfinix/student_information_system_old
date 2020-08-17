import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
export default () => {
    return (<Box display="flex" alignItems="center" justifyContent="center">
        <div style={{ flexGrow: 1 }}>
        <CircularProgress />
        </div>
    </Box >)
}