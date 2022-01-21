import { 
    TextField,
} from '@mui/material';

import { InputProps } from 'constant/interface/forms';

export const Input = ({ label, register, type, required, error, helperText, value, className }: InputProps) => (
    <div className='bg-input'>
        <TextField 
            {...register(value, { required })} 
            error={error} 
            helperText={helperText}
            label={label}
            type={type}
            fullWidth
            // margin="dense"
            variant="outlined"
            className = {className}
            size = 'small'
        />
    </div>
);

export default Input;