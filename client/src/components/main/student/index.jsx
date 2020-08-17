import React from 'react';
import Box  from '@material-ui/core/Box';
import StudentHeader from './studentHeader';
import StudentLists from './studentList';

export default (props)=>{
    return (
        <Box m={1} style={{width:"100%"}}>
        <StudentHeader/>
        <StudentLists/>
        
        </Box>
    )
}