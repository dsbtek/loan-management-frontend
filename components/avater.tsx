
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { ButtonEvent } from 'constant/interface/forms';


export default function ImageAvatars({ children, text, disabled, buttonClick}:{children: React.ReactNode, text:string, disabled:boolean, buttonClick(e: any):ButtonEvent}) {
    // const User = UserIcon;
    return (
        <Stack direction="row" spacing={2} className="dashboard-items">
            <div className="user-text">{text}</div>
            <Avatar  
                onClick={(e) => buttonClick(e)}>
                {children}
            </Avatar>
        </Stack>
    );
}

ImageAvatars.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.objectOf(PropTypes.object).isRequired,
    buttonClick: PropTypes.func,
    disabled: PropTypes.bool,
};

ImageAvatars.defaultProps = {
    buttonClick: () => {},
    disabled: false
};
