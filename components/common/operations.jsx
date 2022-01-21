import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function Operations ({actions, row}) {
    return (
        <div className='space-children'>
            { actions.map(action => 
                <span className='mb-5' key={action.name}>
                    { !action.show || (action.show && row[action.show]) ? 
                        <Button 
                            variant='outlined' 
                            size='small'
                            className={`${action.class}` } 
                            // onClick={() => cellClick[action.action](row.id)}
                        >{action.name}
                        </Button> 
                        :
                        ''
                    }
                </span>
            )
            }
        </div>
    );
}

Operations.propTypes = {
    actions: PropTypes.Array,
    
};
