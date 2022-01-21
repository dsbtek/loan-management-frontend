import React from 'react';
import * as yup from 'yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, CircularProgress } from '@mui/material';
import { registerUser, getAuthState} from '../../slices/auth';
import { IRegisterFormValues } from 'constant/interface/forms';
import { Input } from 'components/common/form';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const schema = yup.object({
    firstName: yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .max(40).required('Please enter valid first name'),
    lastName: yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid last name')
        .max(40)
        .required('Please enter valid last name'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(15).max(15).required(),
    email: yup.string().email('Invalid email format')
        .required('Invalid email format'),
    password: yup.string()
        .required('Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Confirm Passwords must match with the password')
}).required();

const defaultValues: IRegisterFormValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    passwordConfirmation: ''
};

const RegisterForm = (props: { strings: any; }) => {

    const {register, getValues, setValue, handleSubmit, formState: { errors } } = useForm<IRegisterFormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues
    });

    const { strings } = props;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { loading, success } = useAppSelector(state => getAuthState(state, 'register'));
    if (success) router.push('/login');

    const onSubmit = (data: IRegisterFormValues) => {
        dispatch(registerUser(data));
    };
   
    return (
        <div className = 'form-wrap'>
            <h3> {strings.createAnAccountText}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label={strings.firstNamePlaceholder}
                    value="firstName"
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                    required={true}
                    type = "text"
                />
                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label={strings.lastNamePlaceholder}
                    value="lastName"
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                    required={true}
                    type = "text"
                />
                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label={strings.mobileNumberPlaceholder}
                    value="phoneNumber"
                    error={Boolean(errors.phoneNumber)}
                    helperText={errors.phoneNumber?.message}
                    required={false}
                    type = "text"
                />
                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label={strings.emailAddressPlaceholder}
                    value="email"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    required={false}
                    type = "email"
                />
                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label={strings.passwordPlaceholder}
                    value="password"
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    required={false}
                    type = "password"
                />
                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label={strings.confirmPasswordText}
                    value="passwordConfirmation"
                    error={Boolean(errors.passwordConfirmation)}
                    helperText={errors.passwordConfirmation?.message}
                    required={false}
                    type = "password"
                />
                
                <div className = 'form-btn-section-wrap'>
                    <div className="signUp-div">
                        <Link href= "/">
                            <p className = 'typograhy-primary Links'>{strings.registerTerms}</p>
                        </Link>
                        <p className = 'typograhy-secondary'>{strings.registerAnd}</p>
                        <Link href= '/'>
                            <p className = 'typograhy-primary Links'>{strings.registerCondition}</p>
                        </Link>
                        <p className = 'typograhy-secondary'>{strings.registerApply}</p>
                    </div>
                    <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        startIcon={
                            loading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : null
                        }
                    >
                        {strings.createAnAccountText}
                    </Button>
                </div>
            </form>
        </div>
    );
};

RegisterForm.propTypes = {
    strings: PropTypes.objectOf(PropTypes.string).isRequired
};

export default RegisterForm;