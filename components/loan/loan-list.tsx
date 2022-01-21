import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import Spinner from '../../components/common/spinner';
import { loanHeaders } from '../../data/table-headers';
import Grid from '../../components/layout/grid';
import { getLoans } from 'services/loan';

const LoanList = (prop: any) => {
    const router = useRouter();
    const [pageSize, setPageSize ] = useState(2);
    const [page, setPage ] = useState(1);
    const [offset, setOffset ] = useState(0);

    useEffect(() => {
        if (router.query.page && typeof router.query.page === 'string') {
            setPage(parseInt(router.query.page));
        }
    }, [router.query.page]);

    const fetchLoans = ({queryKey}) => { 
        const [_key, { offset, pageSize}] = queryKey;
        return getLoans({offset, limit: pageSize});
    };
 
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery(['projects', {offset, pageSize}], fetchLoans, { keepPreviousData : true });

    const handlePageChange = (page: number, skip: number, size: number) => {
        setPageSize(size);
        setPage(page);
        setOffset(skip);
        router.push(`/loans?page=${page}`, undefined, { shallow: true });
    };

    const cellClick = {
        edit: function edit(id) {
            console.log('edit', id);
        },
        remove: function remove(id){
            console.log('remove', id);
        }
    };
    return (
        <div>
            {isLoading ? <Spinner /> : '' }
            {data && data.rows ? 
                <Grid
                    columns = {loanHeaders || []}
                    data={data && data.rows ? data.rows : []}
                    cellClick={cellClick}
                    totalRows={data.count}
                    handlePageChange={handlePageChange}
                    pageSize={pageSize}
                    loading={isLoading} 
                    currentPage={page}
                /> : ''
            }
        </div>
    );
};


LoanList.propTypes = {
};


export default LoanList;
