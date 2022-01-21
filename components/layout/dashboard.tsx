import { useEffect } from 'react';
import { useRouter } from 'next/router';

import {getstarted, dashboard, transactions, loan, contribution} from '../../constant/images/icons';
import Menu from './menu';
import { Istrings } from '../../constant/interface/auth';
import { useAppSelector } from '../../app/hooks';
import { stringSelector } from '../../slices/language';

const menuList = [
    // {
    //     title: 'GetStarted',
    //     href: '/getstarted',
    //     image: getstarted

    // },

    // {
    //     title: 'Dashboard',
    //     href: '/dashboard',
    //     image: dashboard
    // },
    
    {
        title: 'Loans',
        href: '/loans',
        image: loan

    }

    // {
    //     title: 'Transactions',
    //     href: '/transactions',
    //     image: transactions

    // },

    // {
    //     title: 'Contribution',
    //     href: '/contribution',
    //     image: contribution

    // }
];
const DashboardNav = () => {
    const strings: Istrings = useAppSelector((state: any) => stringSelector(state, 'menu'));
    // useEffect(() => {
    //     if (user.isActive) router.push('/dashboard')
    //     else router.push('/GetStarted');
    // }, [router, user.isActive]);

    return (
        
        <div className="dashboard-wrap">
            <div className="nav">
                <div>
                    { menuList.map( (menu) =>
                        <Menu key={menu.title} menu={menu} />)}
                </div>
            </div>
        </div>
        
    );
};

export default DashboardNav;
