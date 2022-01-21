import React from 'react';
import { useRouter } from 'next/router';
import { ButtonEvent } from 'constant/interface/forms';
import { logout, getAuthState} from '../../slices/auth';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { LayoutImages } from '../../constant/images/images';
import ImageAvatars from '../avater';
import {UserIcon, NotifyIcon} from '../../constant/images/icons';

function DashboardHeader() {
    const { AppLogo } = LayoutImages;
    const { Notify } = NotifyIcon;
    const { User } = UserIcon;

    const router = useRouter();
    const dispatch = useAppDispatch();
    const { success } = useAppSelector(state => getAuthState(state, 'logout'));
    if (success) router.push('/');

    const handleLogout = (e: ButtonEvent) => {
        dispatch(logout());
        return e;
    };

    return (
        <div className="dashboard-header-container">
            <div className="dashboard-logo">
                <AppLogo/>
            </div>

            <div className="dashboard-items">
                <Notify/>
                <div className='border-line'/>
                <ImageAvatars 
                    text='dsbtek@gmail.com'
                    buttonClick = {handleLogout}
                >
                    <User/>
                </ImageAvatars>
            </div>
        </div>
        
    );
}
DashboardHeader.propTypes = {
    // strings: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default DashboardHeader;
