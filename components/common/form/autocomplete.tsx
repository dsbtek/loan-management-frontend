import { useState, useEffect, Fragment } from 'react';
import AsyncSelect from 'react-select/async';
import { 
    InputLabel, 
    FormControl,
    FormHelperText,
    FormGroup,
    FormControlLabel,
    FormLabel,
    TextField,
    TextareaAutosize
} from '@mui/material';

import { AutoCompleteProps} from '../../../constant/interface/forms';

export default function ReactSelect ({ getValues, setValue, label, register, required, error, helperText, value, func}: AutoCompleteProps) {
    const [selected, setSelected] = useState(null);
    const selectedValue = getValues(`${value}`);
    console.log('default', value, selectedValue, selected);

    useEffect(() => {
        register(value);
    }, [register]);
    console.log(value, selectedValue, selected);

    useEffect(() => {
        setSelected(selectedValue || null);
    }, [setSelected, selectedValue]);

    const promiseOptions = (inputValue: string) =>
        new Promise<any>((resolve) => {
            func({query: inputValue}).then(resp => {
                console.log(resp);
                resolve(resp.rows.map(user => ({label: user.email, value: user.id})));
            }).catch(err=> resolve([]));
        });

    return (
        <>
            <InputLabel id="react-select-label-id">{label}</InputLabel>
            <AsyncSelect
                cacheOptions
                defaultOptions
                menuPortalTarget={document.body} 
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                loadOptions={promiseOptions}
                onChange={(event: any) => setValue(`${value}`, event.value, { shouldValidate: true, shouldDirty: true })}
            />
        </>
    );

}

// export function ReactSelect ({ getValues, setValue, register, value}: SelectProps) {
//     const [selected, setSelected] = useState(null);
//     const selectedValue = getValues(`${value}`);
//     console.log('default', value, selectedValue, selected);

//     useEffect(() => {
//         register(value);
//     }, [register]);
//     console.log(value, selectedValue, selected);

//     useEffect(() => {
//         setSelected(selectedValue || null);
//     }, [setSelected, selectedValue]);

//     return (
//         <>
//             {/* <InputLabel id="react-select-label-id">{label}</InputLabel> */}
//             <AsyncSelect
//                 cacheOptions
//                 defaultOptions
//                 menuPortalTarget={document.body} 
//                 styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
//                 loadOptions={promiseOptions}
//                 onChange={(event: any) => setValue(`${value}`, event.value, { shouldValidate: true, shouldDirty: true })}
//             />
//         </>
//     );

// }

// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';


// function sleep(delay = 0) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }

// export function ReactSelect1 ({ getValues, setValue, label, register, required, error, helperText, value, func }: InputProps) {
//     const [open, setOpen] = useState(false);
//     const [options, setOptions] = useState<readonly any[]>([]);
//     const loading = open && options.length === 0;

//     const onChangeHandle = async value => {
//         const response = await func({query: value});
//         setOptions(response.rows);
//     };
        
//     const [selected, setSelected] = useState(null);
//     const selectedValue = getValues(`${value}`);

//     useEffect(() => {
//         register(value);
//     }, [register]);

//     useEffect(() => {
//         setSelected(selectedValue || null);
//     }, [setSelected, selectedValue]);
//     //   React.useEffect(() => {
//     //     if (!open) {
//     //       setOptions([]);
//     //     }
//     //   }, [open]);
        
//     useEffect(() => {
//         let active = true;

//         if (!loading) {
//             return undefined;
//         }

//         return () => {
//             active = false;
//         };
//     }, [loading]);

//     useEffect(() => {
//         if (!open) {
//             setOptions([]);
//         }
//     }, [open]);
//     console.log(selected, value);
//     return (
//         <Autocomplete
//             id="asynchronous-demo"
//             open={open}
//             onOpen={() => {
//                 setOpen(true);
//             }}
//             onClose={() => {
//                 setOpen(false);
//             }}
//             value={selected}
//             onChange={(event, selected)=> setValue(`${value}`, selected.id, { shouldValidate: true, shouldDirty: true })}
//             isOptionEqualToValue={(option, value) => option.id === value.id}
//             getOptionLabel={(option) => option.firstName + option.email}
//             options={options}
//             loading={loading}
//             filterOptions={(x) => x}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     label={label}
//                     onChange={ev => {
//                         // dont fire API if the user delete or not entered anything
//                         if (ev.target.value !== '' || ev.target.value !== null) {
//                             onChangeHandle(ev.target.value);
//                         }
//                     }}
//                     InputProps={{
//                         ...params.InputProps,
//                         endAdornment: (
//                             <Fragment>
//                                 {loading ? <CircularProgress color="inherit" size={20} /> : null}
//                                 {params.InputProps.endAdornment}
//                             </Fragment>
//                         ),
//                     }}
//                 />
//             )}
//         />
//     );
// }

// import debounce from "debounce-promise";

// //...
// this.getOptions = debounce(this.getOptions.bind(this), 500);