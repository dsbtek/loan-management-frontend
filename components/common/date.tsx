import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { DatePickerProps } from 'constant/interface/forms';

export default function AppDatePicker({label, value, helperText, setValue, getValues, register,}: DatePickerProps) {
    const [date, setDate] = useState(null);
    const dateValue = getValues(`${value}`) as Date;
    useEffect(() => {
        register(value);
    }, [register]);
    console.log(value, dateValue);
    useEffect(() => {
        setDate(dateValue || null);
    }, [setDate, dateValue]);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label={label}
                value={date}
                onChange={(date) => setValue(`${value}`, date, { shouldValidate: true, shouldDirty: true })}
                renderInput={(params) => (
                    <TextField {...params} helperText={helperText}  />
                )}
            />
        </LocalizationProvider>
    );
}