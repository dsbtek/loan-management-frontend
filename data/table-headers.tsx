import { LoanRow }  from '../constant/types/data';
import {TableColumn } from 'react-data-table-component';
import Operations from 'components/common/operations';

export const value = '';


export  const headers = (headers, actions) => {
    if (actions && actions.length) {
        const cell =  {
            name: 'Actions',
            button: true,
            cell: (row, index, column, id) =>  <Operations actions={actions} row={row}  />
        };
        headers.push(cell);
    }
    return headers;
};
const actions = [
    {
        name: 'View',
        action: 'edit',
        class: 'text-primary',
        show: 'canEdit',
    },
    {
        name: 'Edit',
        action: 'edit',
        class: 'text-warning',
        show: 'canEdit',
    },
    {
        name: 'Offset',
        action: 'offset',
        show: 'canOffset',
        class: 'text-info',
    },
    {
        name: 'Delete',
        show: 'canDelete',
        action: 'remove',
        class: 'text-danger'
    },
    {
        name: 'Clear',
        show: 'canClear',
        action: 'clear',
        class: 'text-success'
    }
];
const loans: TableColumn<LoanRow>[] = [
    {
        name: 'Date Taken',
        cell: row => <span> {row.dateTaken} </span>
    },
    {
        name: 'Name',
        selector: row => `${row.otherUserFullname}`,
    },
    {
        name: 'Type',
        cell: row => <span>{row.type} </span>
    },
    {
        name: 'Amount',
        cell: row => <span>{row.amount} </span>
    },
    {
        name: 'Offset',
        selector: row => row.totalCleared,
    },
    {
        name: 'Balance',
        selector: row => row.balance,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Due Date',
        selector: row => row.dueDate,
    },
    {
        name: 'Repayment type',
        selector: row => row.repaymentType,
    },
   
];

export const loanHeaders = headers(loans, actions );
