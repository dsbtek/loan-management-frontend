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

import { InputProps } from 'constant/interface/forms';

export const TextArea = ({ label, register, required, error, helperText, value }: InputProps) => (
    <div>

        <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="Enter text"
            label={label}
            {...register(value, { required })} 
        />
    </div>
);

export default TextArea;