/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, CircularProgress } from '@mui/material';
import { requestPasswordReset, getAuthState} from '../../slices/auth';
import { IRecoverPasswordFormValues } from 'constant/interface/forms';
import { Input } from 'components/common/form';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const schema = yup.object({
    email: yup.string().email('Invalid email format').required('Required'),
}).required();

const defaultValues: IRecoverPasswordFormValues = {
    email: ''
};

const RecoverUserPasswordForm = props => {
    const {register, getValues, setValue, handleSubmit, formState: { errors } } = useForm<IRecoverPasswordFormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues
    });
    const { strings } = props;
   
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { loading, success } = useAppSelector(state => getAuthState(state, 'recoverPassword'));
    if (success) router.push('/login');
    
    
    const onSubmit = (data: IRecoverPasswordFormValues) => {
        const email: string = data.email;
        dispatch(requestPasswordReset(email));
        console.log(email);
    };

    console.log(errors, );
    return (
        <div className = 'form-wrap'>
            <h1> {strings.recoverPasswordTxt}</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    label={strings.emailAddressPlaceholder}
                    value="email"
                    error={false}
                    helperText={''}
                    required={false}
                    type = "email"
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

RecoverUserPasswordForm.propTypes = {
    strings: PropTypes.objectOf(PropTypes.string).isRequired
};

export default RecoverUserPasswordForm;