import React from 'react';

interface DoubleProps {
    children: React.ReactNode;
}
export default function double({children}: DoubleProps) { 
    if (children instanceof Array)
        return (
            <div className="flex space-children">
                {children.map((child, ind) => <div className="half-width" key={ind}>{child}</div>)}
            </div>
        );
    return (
        <div className="flex space-children">
            <div>{children}</div>
        </div>

    );
}

