
import PropTypes from 'prop-types';

export default function ErrorDisplay(props: any) {
    const { text } = props;

    return (
        <span
            className='text-danger tiny mt-5'
        >
            {text ? 
                <p>{text}</p> : ''
            }
        </span>
    );
}

ErrorDisplay.propTypes = {
    text: PropTypes.string,
};

ErrorDisplay.defaultProps = {
    text: '',
};