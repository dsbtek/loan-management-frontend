import { useState, useEffect, Fragment } from 'react';
import AsyncSelect from 'react-select/async';
import { InputLabel, 
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

import { InputProps } from '../../../constant/interface/forms';


export default function CheckBox() {
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="End"
                    labelPlacement="end"
                />
            </FormGroup>
        </FormControl>
    );
}
