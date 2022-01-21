/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@mui/material';

interface ModalProps {
    open: boolean;
    handleClose: any;
    children: React.ReactNode
}
const Modal = (props: ModalProps) => {
    const { open, handleClose, children } = props;
    return (
        <div>
            <Dialog
                aria-labelledby="form-dialog-title"
                onClose={handleClose}
                open={open}
                maxWidth='sm'
                fullWidth={true}
            >
                {children}
            </Dialog>
        </div>
    );
};

Modal.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool
};

export default Modal;