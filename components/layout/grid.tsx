import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { tableStyles } from 'data/table-styles';

function Grid({columns, data, totalRows, pageSize, loading,  currentPage, handlePageChange, cellClick}) {
    const onPageChange = (page: number) => {
        handlePageChange(page, (page -1) * pageSize, pageSize );
    };
    const handlePerRowsChange = (size: number, page: number) => {
        handlePageChange(1, 0, size);
    };
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                // selectableRows
                striped
                highlightOnHover
                pointerOnHover
                customStyles={tableStyles}
                progressPending={loading}
                pagination
                paginationServer
                paginationPerPage={pageSize}
                // paginationRowsPerPageOptions={pageSize}
                paginationTotalRows={totalRows}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={onPageChange}
                theme='light'
            />
        </div>
    );
}

Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        value: PropTypes.string,
    })).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        selector: PropTypes.string,
    })).isRequired,
};

export default Grid;