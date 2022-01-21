import exp from 'constants';
import React from 'react';
import { Path,UseFormRegister } from 'react-hook-form';
export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type ButtonEvent = React.FormEvent<EventTarget>;


interface IRepaymentOption {
    amount: number;
    date: string;
}
export interface ILoanFormValues {
    type: string;
    lender: string;
    amount: number;
    dateToRepay?: string;
    dateTaken: string;
    repaymentType: string;
    repaymentOptions: {
      amount?: number;
      period?: string;
      day?: number;
      type?: string;
      effectiveDate?: string;
      list?: IRepaymentOption[];
    }
}

export interface IRegisterFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface ILoginFormValues {
  username: string;
  password: string;
}
export interface IRecoverPasswordFormValues {
  email: string;
}

export interface IRessetPasswordFormValues {
  userId: string;
  password: string;
  passwordConfirmation: string;
}
 
export interface IContacUsFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

type optionsT = {
  [key: string] : string | number ;
}  


type handleChangeT = (...args: any[]) => any;

export type InputProps = {
    label: string;
    type?:string; 
    options?: optionsT[];
    register: UseFormRegister<any>;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    value: any;
    getValues?: handleChangeT;
    setValue?: handleChangeT;
    className?: string;
  };

export type AutoCompleteProps = {func: handleChangeT} & InputProps;
export type SelectProps = {
    options?: optionsT[];
    register: UseFormRegister<any>;
    value: any;
    getValues?: handleChangeT;
    setValue?: handleChangeT;
  };
export type FormProps = {
    control?: any;
    register: UseFormRegister<any>;
    errors: any;
    getValues?: handleChangeT;
    setValue?: handleChangeT;
  };
export type DatePickerProps = {
    label: string;
    value: string;
    required: boolean;
    error?: boolean;
    helperText?: string;
    setValue: handleChangeT;
    register: UseFormRegister<any>;
    getValues: handleChangeT;
  };
  