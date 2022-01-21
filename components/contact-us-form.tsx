import React from 'react';
import * as yup from 'yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, CircularProgress } from '@mui/material';
import { registerUser, getAuthState} from '../slices/auth';
import { IContacUsFormValues } from 'constant/interface/forms';
import { Input } from 'components/common/form';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import TextareaAutosize from '@mui/material/TextareaAutosize';


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

const defaultValues: IContacUsFormValues = {
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
};

function ContactForm(props: { strings: any; }) {
    const {register, getValues, setValue, handleSubmit, formState: { errors } } = useForm<IContacUsFormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues
    });
    const { strings } = props;
    const router = useRouter();
    // const dispatch = useAppDispatch();
    const { loading, success } = useAppSelector(state => getAuthState(state, 'register'));
    // if (success) router.push('/login');

    const onSubmit = (data: IContacUsFormValues) => {
    // dispatch(registerUser(data));
    };
    return(
        <div className="" id="contactUs">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label='Name'
                    value="name"
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                    required={true}
                    type = "text"
                />

                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label='Email'
                    value="email"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    required={true}
                    type = "email"
                />

                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label='Mobile Number'
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
                    label='Message'
                    value="message"
                    error={Boolean(errors.email)}
                    helperText={errors.message?.message}
                    // minRows={3}
                    required={false}
                    type = "text"
                />

                <div className = 'form-btn-section-wrap'>
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
                        Send Message
                    </Button>
    
                </div>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    strings: PropTypes.objectOf(PropTypes.string).isRequired
};

export default ContactForm;