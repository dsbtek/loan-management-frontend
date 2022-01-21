import { Istrings } from '../constant/interface/auth';
import { useAppSelector } from '../app/hooks';
import { stringSelector } from '../slices/language';

import { RecoverPasswordImages } from '../constant/images/images';
import RecoverPasswordForm from '../components/auth/recover-password-form';


const RecoverPassword = () => {
    const strings: Istrings = useAppSelector(state => stringSelector(state, 'recoverPassword'));
    const { RecoverPasswordImg } = RecoverPasswordImages;

    return(
        <div className='register-wrap'>
            <div className='register-img'>
                <RecoverPasswordImg />     
            </div>
            <div className="register">
                <RecoverPasswordForm strings={strings} />
            </div>
        </div>
    );
};
RecoverPassword.propTypes = {
};
export default RecoverPassword;