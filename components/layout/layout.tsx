import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppProps } from 'next/app';
import Router from 'next/router';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AuthLayout from './auth-layout';
import NoAuthLayout from './no-auth-layout';
import Toast from '../common/toast';
import { getIsAuthenticated, 
    getUser, userAuthenticated } from '../../slices/auth';
 
const noAuthPaths: string[] = ['/login', '/register', '/', '/verify-email', '/password-reset'];

const Layout = ({
    children,
}: {
    children: React.ReactNode
  }) => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => getIsAuthenticated(state));

    const user = useAppSelector(state => getUser(state));

    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            dispatch(userAuthenticated(JSON.parse(loggedInUser)));
        }
        const { pathname } = Router;
        if (isAuthenticated && noAuthPaths.includes(pathname)) {
            Router.push('/loans');

        }
        else if (!isAuthenticated && !noAuthPaths.includes(pathname)) {
            Router.push('/login');
        }
        else {
            setLoaded(true);
        }
    },[dispatch, isAuthenticated]);

    if(!loaded){
        return <div />;
    }
    return (
        <div className="full-layout">
            <Toast />
            <div className="full-layout">
                { isAuthenticated? (
                    <AuthLayout>
                        { children }
                    </AuthLayout>
            
                ) : (
                    <NoAuthLayout >
                        { children }
                    </NoAuthLayout>
            
                )}
            </div>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default Layout;
