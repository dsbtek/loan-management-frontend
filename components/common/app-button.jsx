import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AppButton ({text, size, buttonClick, disabled,}) {
    return (
        <Button
            type='submit'
            size={size}
            variant='danger'
            className='app-button'
            disabled={disabled}
            onClick={() => buttonClick()}
        >
            {text}
        </Button>
    );
}

AppButton.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    buttonClick: PropTypes.func,
    disabled: PropTypes.bool,
};

AppButton.defaultProps = {
    size: 'lg',
    buttonClick: () => {},
    disabled: false
   

};