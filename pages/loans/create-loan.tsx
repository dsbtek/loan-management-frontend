import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import AppButton from 'components/common/app-button';

import { Istrings } from '../../constant/interface/auth';
import { stringSelector } from '../../slices/language';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { saveLoan } from '../../slices/loans';

const pageIdentifier = 'create loans';
interface IFormInputs {
    firstName: string
    lastName: string
    age: number
    amount: number
    lend: boolean
    list: [string]
  }
  
const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().positive().integer().required(),
    list: yup.array().length(1),
    amount: yup.string().transform((value, originalValue)=> value.replace(/,/g, '')).required(),
}).required();
  
const createLoan = (prop: any) => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const dispatch = useAppDispatch();
    // const {loading, hasErrors} = useAppSelector(state => getLoanState(state, pageIdentifier));
    // const strings: Istrings = useAppSelector(state => stringSelector(state, 'newLoanUser'));

    useEffect(() => {
        // dispatch(fetchLoans({}, fetchLoansText));
    }, [dispatch]);
    const onSubmit = (data: IFormInputs, d) => { 
        console.log(data, d); 
        // data.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            </form>
        </div>
    );
};


createLoan.propTypes = {
};

export default createLoan;
// phone_number: yup
//       .number()
//       .typeError(`Phone number is required`)
//       .integer(`Please enter a valid phone number without decimal values`)
//       .positive(`Please enter a valid phone number`)
//       .test(
//         "onlyNumbers",
//         `Please enter a valid phone number`,
//         (value: any) => (/^[0-9]*$/.test(value.toString()) && value.toString().length >= 10))
//       .required(Phone number is required),
