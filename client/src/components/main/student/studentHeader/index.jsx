import React, { useState } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import AddStudentDialogue from '../addStudent_dialogue';

export default () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box m={1} display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" gutterBottom>Students</Typography>
            <Button variant="contained" onClick={handleClickOpen} size="small" color="primary">Add</Button>
            <AddStudentDialogue open={open} handleClose={handleClose} />
        </Box>
    )

}