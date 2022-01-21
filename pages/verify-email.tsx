import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';



function VerifyEmail() {
    const router = useRouter();
    // if (success) router.push('/login');

    useEffect (() => {
        // debugger;
        console.log('verify-email', router);

    }, [router]);

    // const isActive: string;
    // dispatch(verifyEmail('shjsh'));


    return (
        <>
            <div className="get-started">
            </div>
        </>
    );
}

export default VerifyEmail;
