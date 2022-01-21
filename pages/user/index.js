// import React, {useEffect} from 'react';
// import {connect} from 'react-redux';

// import {fetchLoan} from '../../actions/loansActions';
// import {Loan} from '../../components/loan';

const LoansPage = () => 
//     useEffect(() => {
//         dispatch(fetchLoan());
//     }, [dispatch]);

//     // Show loading, error, or success state
//     const renderLoan = () => {
//         if (loading) return <p>Loading loan...</p>;
//         if (hasErrors) return <p>Unable to display loan.</p>;
//         // return loans.map((loan) => <Loan key={loan.id} loan={loan} />);
//         return <div>Loan</div>;
//     };

    (
        <section>
            <h1>Loan</h1>
            {/* {renderLoan()} */}
        </section>
    )
;

// const mapStateToProps = (state) => ({
//     loading: state.loans.loading,
//     loans: state.loans.loans,
//     hasErrors: state.loans.hasErrors,
// });

export default LoansPage;