import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAppSelector } from '../../app/hooks';
import { getAlertState } from '../../slices/alert';
import 'react-toastify/dist/ReactToastify.css';



function Toast() { 
    // console.log();
    const alert = useAppSelector(state => getAlertState(state));
    // console.log('toast', alert);

    useEffect(() => {
        if(alert.message ) {
            if (alert.type === 'success') toast.success(alert.message);
            else if (alert.type === 'info') toast.info(alert.message);
            else toast.error(alert.message);
        }
    }, [alert]);

    return (
        <ToastContainer
        />
    );
}

export default Toast;
