import { Istrings } from '../constant/interface/auth';
import { useAppSelector } from '../app/hooks';
import { stringSelector } from '../slices/language';

import { LoginImages } from '../constant/images/images';
import PasswordResetForm from '../components/auth/password-reset-form';

const PasswordReset = () => {
    const strings: Istrings = useAppSelector(state => stringSelector(state, 'passwordReset'));
    const { LoginImg } = LoginImages;

    return (
        <div className='register-wrap'>
            <div className='register-img'>
                <p>{strings.resetGuide}</p>
                <LoginImg />     
            </div>
            <div className="register">
                <PasswordResetForm strings={strings} />
            </div>
        </div>
    );
};

PasswordReset.propTypes = {
};

export default PasswordReset;