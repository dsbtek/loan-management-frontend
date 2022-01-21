import React from 'react';
import { DialogContentText } from '@mui/material';

interface SectionProps {
    children: React.ReactNode;
    title?: string;
}

export default function Section({children, title}: SectionProps) { 
    return (
        <>  <div className='mt-10'>
            {title ? <DialogContentText> {title} </DialogContentText>: ''}
        </div> 
        <div >
            {children}
        </div>
        </>
    );
}

