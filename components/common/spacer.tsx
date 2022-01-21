import PropTypes from 'prop-types';

// import './Spacer.module.scss';

function Spacer({width, height}) {
    
    return (
        <div style={{height, width}}/>
    );
}

Spacer.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

Spacer.defaultProps = {
    width: 0,
    height: 0,
};
export default Spacer;