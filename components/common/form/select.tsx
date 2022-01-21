import { useState, useEffect } from 'react';
import { 
    InputLabel, 
    Select,
    FormControl,
    FormHelperText,
    MenuItem,
    Checkbox,
    FormGroup,
    FormControlLabel,
    FormLabel,
    TextField,
    TextareaAutosize


} from '@mui/material';

import {InputProps, SelectProps} from '../../../constant/interface/forms';

export default function AppSelect ({ getValues, setValue, label, register, required, error, helperText, value, options }: InputProps) {
    const [selected, setSelected] = useState(null);
    const selectedValue = getValues(`${value}`);

    useEffect(() => {
        register(value);
    }, [register]);

    useEffect(() => {
        setSelected(selectedValue || null);
    }, [setSelected, selectedValue]);
    return (
        <FormControl  margin='dense' fullWidth error={error}>
            <InputLabel id="demo-simple-select-error-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-error-label"
                id="demo-simple-select-error"
                label={label}
                value={selected}
                onChange={(event) => setValue(`${value}`, event.target.value, { shouldValidate: true, shouldDirty: true })}
            >
                {/* <MenuItem value="">
                <em>None</em>
            </MenuItem> */}
                { options.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem> )
                }
            </Select>
            <FormHelperText>{helperText}</FormHelperText>

        </FormControl>
    );

}
