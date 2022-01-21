/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, CircularProgress } from '@mui/material';
import { resetPassword, getAuthState} from '../../slices/auth';
import { IRessetPasswordFormValues } from 'constant/interface/forms';
import { Input } from 'components/common/form';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ParsedUrlQuery } from 'querystring';

const schema = yup.object({
    password: yup.string()
        .required('Password is required')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Confirm Passwords must match with the password')
}).required();

const defaultValues: IRessetPasswordFormValues = {
    userId: '',
    password: '',
    passwordConfirmation: ''
};

const PasswordResetForm = props => {
    const router = useRouter();
    const id = router.query;
    const {register, getValues, setValue, handleSubmit, formState: { errors } } = useForm<IRessetPasswordFormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues
    });
    const { strings } = props;
   
    const dispatch = useAppDispatch();
    const { loading, success } = useAppSelector(state => getAuthState(state, 'resetPassword'));
    if (success) router.push('/login');
    
    
    const onSubmit = (data: IRessetPasswordFormValues) => {
        const userId: ParsedUrlQuery = id;
        const password: string = data.password;
        dispatch(resetPassword(userId, password));
        console.log(userId, password);
    };

    console.log(errors, );
    return (
        <div className = 'form-wrap'>
            <h3> {strings.passwordResetPasswordTxt}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        startIcon={
                            loading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : null
                        }
                    >
                        {strings.recoverPasswordBtn}
                    </Button>
                </div>
            </form>
        </div>
    );
};

PasswordResetForm.propTypes = {
    strings: PropTypes.objectOf(PropTypes.string).isRequired
};

export default PasswordResetForm;