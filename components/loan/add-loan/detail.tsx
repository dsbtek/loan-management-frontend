import React from 'react';
import Halves from '../../common/two-halves';
import FormDatePicker from '../../common/date';
import { Select, TextField } from '../../common/form';
import { FormProps } from 'constant/interface/forms';

const loanOptions = [
    { 
        label: 'Lend', 
        value: 'Lend'
    },
    { 
        label: 'Borrow', 
        value: 'Borrow'
    },
];
export default function Fields({register, setValue, getValues, errors }: FormProps) {

    return (
        <>
            <Halves 
            >
                <TextField
                    error={Boolean(errors.amount)}
                    helperText={errors.amount?.message}
                    register={register}
                    label="Amount"
                    value="amount"
                    type="number"
                    required
                />
                <Select 
                    label="Loan Type" 
                    value="type" 
                    required
                    options={loanOptions}
                    getValues={getValues}
                    setValue={setValue}
                    register={register}
                    error={errors.type?.message ? true: false} 
                    helperText={errors.type?.message ? 'this is a required field' : ''}
                />
                            
            </Halves>
            <FormDatePicker 
                label="Date Taken" 
                required
                getValues={getValues}
                setValue={setValue}
                register={register}
                value='dateToRepay'
                error={errors.dateTaken?.message ? true: false} 
                helperText={errors.dateTaken?.message ? 'this is a required field' : ''}
            />
        </>
    );
}
