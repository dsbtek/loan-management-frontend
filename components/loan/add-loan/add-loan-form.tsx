/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import * as yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import {
    Button,
    DialogContent,
    DialogActions,
    DialogTitle,
    CircularProgress
} from '@mui/material';

import { createLoan, getLoanUsers } from '../../../services/loan';
import FormDatePicker  from '../../common/date';
import Halves from '../../common/two-halves';
import { ILoanFormValues } from 'constant/interface/forms';
import { Select, AutoComplete, TextArea, } from '../../common/form';
import CustomSection from './custom';
import LoanDetailSection from './detail';
import PeriodicSection from './periodic';
import Section from 'components/common/form-section';

const repaymentOptions = [
    { 
        label: 'Once', 
        value: 'once'
    },
    { 
        label: 'Several (Periodic)', 
        value: 'periodic'
    },
    { 
        label: 'Several (Custom)', 
        value: 'custom'
    },
];


const custom = yup.object({
    amount: yup.number().required(),
    date: yup.string().required(),
});

const schema = yup.object({
    amount: yup.number().min(1).required(),
    type: yup.string().required(),
    repaymentType: yup.string().required(),
    dateTaken: yup.string().required(),
    remarks: yup.string(), 
    repaymentOptions: yup.object().shape({
        period: yup.string(),
        amount: yup.number(),
        list: yup.array(custom),
    }),
}).required();

const defaultValues: ILoanFormValues = {
    type: '',
    lender: '',
    amount: 0,
    dateTaken: new Date().toISOString(),
    dateToRepay: new Date().toISOString(),
    repaymentType: '',
    repaymentOptions: {
        amount: 0,
        period: '',
        list: [{amount: 0, date: new Date('05 May 2000').toISOString()}]
    }
};

const LoanForm = props => {
    const { handleClose } = props;
    const queryClient = useQueryClient();
    const {register, getValues, setValue, watch, control, reset, handleSubmit, formState: { errors } } = useForm<ILoanFormValues>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues

    });
    const watchRepaymentType = watch('repaymentType', 'once');
    
    const { mutate, isLoading } = useMutation(createLoan, {
        onSuccess: data => {
            console.log(data);
            const message = 'success';
            handleClose();
            reset();
        },
        onError: (error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        }
    });
    const onSubmit = (data: ILoanFormValues) => {
        const loan = { 
            ...data
        };
        loan.repaymentOptions.type = 'Last Day of Month';
        loan.repaymentOptions.day = 25;
        mutate(loan);
    };
    console.log(errors, );
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle color="primary" id="form-dialog-title">
                        Loan
                </DialogTitle>
                <DialogContent>
                    <AutoComplete
                        setValue={setValue}
                        getValues={getValues}
                        register={register}
                        error={Boolean(errors.lender)}
                        func={getLoanUsers}
                        label='User'
                        value='lender'
                        required={true}
                        helperText={''}
                        
                    />
                    <Section title='Loan Details'>
                        <LoanDetailSection 
                            getValues={getValues}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                        />
                    </Section>
                    <Section title='Repayment options'>
                        <Select 
                            label="Repayment type" 
                            value="repaymentType" 
                            required
                            options={repaymentOptions}
                            register={register} 
                            getValues={getValues}
                            setValue={setValue}
                            error={errors.repaymentType?.message ? true: false} 
                            helperText={errors.repaymentType?.message ? 'this is a required field' : ''}
                        />
                        { watchRepaymentType === 'once' &&
                                <FormDatePicker 
                                    label="Date To Repay" 
                                    required
                                    getValues={getValues}
                                    setValue={setValue}
                                    register={register}
                                    value='dateToRepay'
                                    error={errors.dateToRepay?.message ? true: false} 
                                    helperText={errors.dateToRepay?.message ? 'this is a required field' : ''}
                                />
                        }

                        { watchRepaymentType === 'periodic' &&
                            <PeriodicSection
                                {...{ control, register,  getValues, setValue, errors }}
                            /> 

                        }

                        { watchRepaymentType === 'custom' &&
                                <CustomSection
                                    {...{ control, register,  getValues, setValue, errors }}
                                />

                        }
                    </Section>
                    <Section>
                        <Halves>
                            <TextArea
                                register={register}
                                label="Remarks"
                                value="remarks"
                                error={false}
                                helperText={''}
                                required={false}
                            />
                        </Halves>
                    </Section>
                        

                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleClose} variant="outlined">
                            Cancel
                    </Button>
                    <Button
                        color="primary"
                        type="submit"
                        variant="contained"
                        disabled={isLoading}
                        startIcon={
                            isLoading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : null
                        }
                    >
                            Create
                    </Button>
                </DialogActions>
            </form>
        </div>
    );
};

LoanForm.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool
};
// }
export default LoanForm;