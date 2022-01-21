import {FinancialJouney} from '../constant/images/images';

function FinancialJourney(){
    const {Finance} = FinancialJouney;
    return (
        // <div className="container">
        <div className="FinancialJourney-container" id="financialJourney">
            <div className="FinancialJourneyCard">
                <Finance/>
            </div>
            <div className="FinancialJourneyCardTxt">
                <h1 className=''>
                    Guiding you <br/>
                    through Life’s <br/>
                    Financial
                    Journey
                </h1>
                <p className=''>
                    Compare rates, crunch numbers and get
                    expert guidiance for life ’ s pivotal
                    finanacial moments from our
                    community that is driven by the
                    cooperative experts and members.
                </p>
            </div>
        </div>
        // </div>
    );
}
export default FinancialJourney;