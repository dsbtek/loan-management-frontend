import { Istrings } from '../constant/interface/auth';
import { useAppSelector } from '../app/hooks';
import { stringSelector } from '../slices/language';

import RegisterForm from '../components/auth/form-register';
import { RegisterImages } from '../constant/images/images';


const Register = () => {
    const strings: Istrings = useAppSelector(state => stringSelector(state, 'register'));
    const { RegisterImg } = RegisterImages;
    
    return(
        <div className='register-wrap'>
            <div className='register-img'>
                <p>Sign up to get expert guidance and assistance for life’s pivotal financial moments</p>
                <RegisterImg />     
            </div>
            <div className="register">
                <RegisterForm strings={strings} />
            </div>
        </div>);
};

Register.propTypes = {
};


 
export default Register;