import React from 'react';
import * as yup from 'yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { Button, CircularProgress } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';

import { alertError } from 'slices/alert';
import { login } from '../../services/auth';
import { userAuthenticated, authRequestFailed } from '../../slices/auth';
import { ILoginFormValues } from 'constant/interface/forms';
import { Input } from 'components/common/form';
import { useAppDispatch } from '../../app/hooks';


const schema = yup.object({
    username: yup.string().email('Invalid email format').required('Required'),
    password: yup.string().required(),
}).required();

const defaultValues: ILoginFormValues = {
    username: '',
    password: ''
};

const LoginForm = (props: { strings: any; }) => {
    const queryClient = useQueryClient();
    const {register, getValues, setValue, handleSubmit, reset, formState: { errors } } = useForm<ILoginFormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues
    });

    const { strings } = props;
    const dispatch = useAppDispatch();

    const { mutate, isLoading } = useMutation(login, {
        onSuccess: data => {
            console.log(data);
            dispatch(userAuthenticated(data));
            reset();
        },
        onError: (error: string) => {
            dispatch(alertError(error));
        },
        onSettled: () => {
            queryClient.invalidateQueries('login');
        }
    });
    const onSubmit = (data: ILoginFormValues) => {
        const login = { 
            ...data
        };
        mutate(login);
    };

    return (
        <div className = 'form-wrap'>
            <h3> {strings.signinText}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label={strings.emailAddressPlaceholder}
                    value="username"
                    error={Boolean(errors.username)}
                    helperText={''}
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
                    helperText={''}
                    required={false}
                    type = "password"
                />
                <div className = 'form-btn-section-wrap'>
                    <div className="signUp-div">
                        <Link href="/recover-password">
                            <p className = 'typograhy-primary Links'>{strings.loginRecoverPasswordLinkTxt}</p>
                        </Link>
                        <p className = 'typograhy-secondary'>{strings.loginDetailsTxt}</p>
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isLoading}
                        startIcon={
                            isLoading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : null
                        }
                    >
                        {strings.loginButtonText}
                    </Button>
                    
                </div>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    strings: PropTypes.objectOf(PropTypes.string).isRequired
};

export default LoginForm;