import React from 'react';
import { TextField, Select } from '../../common/form';
// import { DialogContentText } from '../../common/';

import Halves from '../../common/two-halves';
import { FormProps } from '../../../constant/interface/forms';

const periods = [
    { 
        label: 'Daily', value: 'Daily'
    },
    { 
        label: 'Weekly', value: 'Weekly'
    },
    { 
        label: 'Monthly', value: 'Monthly'
    },
];
export default function Fields({register, setValue, getValues, errors }: FormProps) {

    return (
        <>
          
            <Halves 
            >
                <TextField
                    error={Boolean(errors.period)}
                    helperText={errors.period?.message}
                    register={register}
                    label="repaymentOptions.period"
                    value="repaymentOptions.period"
                    type="text"
                    required
                />

                <Select 
                    label="Frequency" 
                    value="repaymentOptions.period" 
                    required
                    options={periods}
                    register={register} 
                    getValues={getValues}
                    setValue={setValue}
                    error={errors.type?.message ? true: false} 
                    helperText={errors.type?.message ? 'this is a required field' : ''}
                />
            </Halves>
        </>
    );
}
