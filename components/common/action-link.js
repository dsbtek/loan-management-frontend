import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '@mui/material/Button';

export default function ActionLink ({text, link, handleClick}) {
    return (
        <div type='button'>
            {link ? <Link href={link}>
                <span 
                    className='action-link'
                >
                    {text}
                </span>
            </Link> :
                <Button 
                    className='action-link'
                    onClick={handleClick}
                >
                    {text}
                </Button>
            }
            

        </div>
        
        
    );
}

ActionLink.propTypes = {
    text: PropTypes.string.isRequired,
};