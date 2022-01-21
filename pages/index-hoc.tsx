/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../app/hooks';

// eslint-disable-next-line no-undef
const withApp = (WrappedComponent: JSX.IntrinsicAttributes) => (props: JSX.IntrinsicAttributes) => { 
    const router = useRouter();
    const dispatch = useAppDispatch();
    return (
        <h1>withAuth</h1>
        // <WrappedComponent
        //     // eslint-disable-next-line react/jsx-props-no-spreading
        //     {...props}
        //     router={router}
        //     dispatch={dispatch}
        //     selector={useAppSelector}
        // />
    );
};


export default withApp;
