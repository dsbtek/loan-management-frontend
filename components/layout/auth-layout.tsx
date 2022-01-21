import PropTypes from 'prop-types';
import React, { useRouter } from 'next/router';

import DashboardNavigation from './dashboard';
import { useAppSelector } from '../../app/hooks';
import DashboardHeader from './dashboard-header';
import { getIsActivated } from '../../slices/auth';
import GetStarted from '../auth/get-started';

const noAuthPaths = ['/login', '/register'];

function AuthLayout({children,}: {children: React.ReactNode }) {
    const router = useRouter();
    const isActivated = useAppSelector(state => getIsActivated(state));
    
    if(noAuthPaths.find(f => f === router.pathname)) {
        router.push('/loans');
    }
    return (
        <div className='full-layout'>
            <div className='full-layout'>
                <DashboardHeader />
            </div>
            <div className='full-layout flex flex-row'>
                <div className='col-2'>
                    <DashboardNavigation />
                </div>
                <div className='container-fluid col-10 mr-10'>
                    {!isActivated ? <GetStarted /> :
                        <div>
                            {children}
                        </div>
                    }
                </div>
            </div>
         
        </div>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AuthLayout;
