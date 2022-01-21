import React from 'react';
import { useFieldArray } from 'react-hook-form';
import {
    Button
} from '@mui/material';

import Halves from '../../common/two-halves';
import FormDatePicker from '../../common/date';
import { TextField } from 'components/common/form';
import { FormProps } from 'constant/interface/forms';

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues, errors }: FormProps) {
    const { fields, append, remove, prepend } = useFieldArray({
        control,
        name: 'repaymentOptions.list'
    });

    renderCount++;

    return (
        <>
            <div>
                {fields.map((item, index) => {
                    return (
                        <div className='flex' key={item.id}>
                            <Halves>
                                <TextField
                                    // error={Boolean(errors.amount)}
                                    register={register}
                                    // id={`repayment-option-amount-${index}` }
                                    label="Amount"
                                    value={`repaymentOptions.list[${index}].amount`}
                                    type="number"
                                />
                                <FormDatePicker 
                                    label="Date" 
                                    required
                                    getValues={getValues}
                                    setValue={setValue}
                                    register={register}
                                    value={`repaymentOptions.list[${index}].date`}
                                />
                               
                            </Halves>
                            <Button type="button" onClick={() => remove(index)}>
                                    Delete
                            </Button>
                           
                        </div>
                    );
                })}
            </div>

            <section>
                <Button
                    type="button"
                    onClick={() => {
                        append({amount: 0 });
                    }}
                >
                append
                </Button>
                <Button
                    type="button"
                    onClick={() => {
                        prepend({amount: 0 });
                    }}
                >
                prepend
                </Button>
            </section>

            <span className="counter">Render Count: {renderCount}</span>
        </>
    );
}
