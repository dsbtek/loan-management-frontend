import { useState } from 'react';
import Spacer from 'components/common/spacer';
import { Istrings } from '../../constant/interface/auth';
import { stringSelector } from '../../slices/language';
import { useAppSelector } from '../../app/hooks';
import PageTitle from '../../components/common/page-title';
import ActionLink from '../../components/common/action-link';
import LoanList from 'components/loan/loan-list';
import LoanForm from 'components/loan/add-loan/add-loan-form';
import Modal from 'components/common/modal';

const LoansPage = (prop: any) => {
    const strings: Istrings = useAppSelector(state => stringSelector(state, 'loan'));
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Modal handleClose={() => {setOpen(false);}} open={open}>
                <LoanForm open={true} handleClose={() => {setOpen(false);}} />
            </Modal>
            <Spacer height={50} />
            <div className='row'>
                <div className='col-8'>
                    <div className='flex center-align'> 
                        <PageTitle  title={strings.loanPageTitle} />
                        <div className='mt-10 ml-10 space-children'>
                            <ActionLink text={strings.addLoanActionText} handleClick={() => {setOpen(true);}} link='' />
                            {/* <ActionLink text={strings.requestLoanActionText} link='/loans/create-loan' /> */}
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    Total Card
                </div>
            </div>
            <LoanList />
        </div>
    );
};

LoansPage.propTypes = {
};

export default LoansPage;
