import { useRouter } from 'next/router';

import { requestVerification, getAuthState} from '../../slices/auth';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ParsedUrlQuery } from 'querystring';



function GetStarted() {
    const router = useRouter();

    const dispatch = useAppDispatch();
    const { success } = useAppSelector(state => getAuthState(state, 'resetPassword'));
    if (success) router.push('/login');

    const handleClick = () => {
       
        console.log(localStorage.getItem('user'));
    };

    return (
        <>
            <div className="get-started">
                <h3>Verify your account to get started</h3>
                <p className="">
                    please click on verification link sent to your email
                    to verify or click <button className='btn-get-started' onClick={handleClick}>hear</button> to get started.
                </p>
            </div>
        </>
    );
}

export default GetStarted;

