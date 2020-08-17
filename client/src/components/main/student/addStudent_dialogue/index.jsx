import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions,Button,TextField } from '@material-ui/core';

export default ({open,handleClose}) => {
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle id="simple-dialog-title">Add Student</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    id="name"
                    label="Student Name"
                    type="name"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
          </Button>
            </DialogActions>
        </Dialog>
    )
}