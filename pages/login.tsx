import { Istrings } from '../constant/interface/auth';
import { useAppSelector } from '../app/hooks';
import { stringSelector } from '../slices/language';

import { LoginImages } from '../constant/images/images';
import LoginForm from '../components/auth/form-login';


const Login = () => {
    const strings: Istrings = useAppSelector(state => stringSelector(state, 'login'));
    const { LoginImg } = LoginImages;
    return (
        <div className='register-wrap'>
            <div className='register-img'>
                <p>Sign up to get expert guidance and assistance for life’s pivotal financial moments</p>
                <LoginImg />     
            </div>
            <div className="register">
                <LoginForm strings={strings} />
            </div>
        </div>
    );
};
Login.propTypes = {
};
export default Login;