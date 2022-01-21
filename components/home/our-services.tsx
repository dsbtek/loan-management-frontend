import {OurServicess,LoanBusiness,LoanPersonal} from '../../constant/images/icons';



function OurServices(){
    const {OurService} = OurServicess;
    const {BusinessLoan} = LoanBusiness;
    const {PersonalLoan} = LoanPersonal;

    return (
    // <div className="container">
           
        <div className="OurServices-container">
            <h1 > Our Services</h1>
            <p className="mb-5">We provide support loan and expert advisory services to individuals and small businesses</p>
            <div className="wrapCards">
                <div className="ourServicesCard">
                    <OurService />
                    <h3>Financial Services</h3>
                    <p>Get financial advice and services from the experts in the industry, to help you grow exponentially.</p>
                </div>
                <div className="ourServicesCard">
                    <PersonalLoan />
                    <h3>Personal Loan</h3>
                    <p>As a Cooperative, We offer interest and stress free loans to eligible members of our community to help them meet their urgent obligations.</p>
                </div>
                <div className="ourServicesCard">
                    <BusinessLoan />
                    <h3>Business Loan</h3>
                    <p>PLOM Cooperative members get access to interest free loans and support that will empower them and help their businesses grow.</p>
                </div>
            </div>
                
        </div>
        
    );
}

export default OurServices;