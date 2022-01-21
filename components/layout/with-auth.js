import { useRouter } from 'next/router';

const noAuthPaths = ['/login', '/register'];

const withAuth = Component => {
    const Auth = (props) => {
        const router = useRouter();
        // console.log('auth',router.pathname);
        if(noAuthPaths.find(f => f === router.pathname)) {
            // return router.push('/loans');
        }
        return (
            <Component props={props} />
        );
    };
  
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
};
  
export default withAuth;