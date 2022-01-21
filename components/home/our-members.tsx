import {OurMember} from '../../constant/images/images';
import AppButton from '../common/app-button';

function OurMembers(){
    const {Members} = OurMember;
    return (
           
        <div className="FinancialJourney-container">
            <div className="FinancialJourneyCard">
                <h1 className='ourmembertxtHeader'>Our Members</h1>
                <Members/>
            </div>
            <div className="FinancialJourneyCardTxt ourmembertxt">
                <p>
                        Our members are objective and result oriented individuals like you and me, 
                        from all works of life, civil servants, business owners,, entrepreneurs, 

                        We help each other grow by providing the right advice, support and 
                        resources that you need to grow and take charge of your future. 
                        As a Cooperative, we offer interest and stress free loans to eligible 
                        members of our community to help them meet their urgent obligations.
                </p>
                <AppButton text="Join Our Community"/>
            </div>
        </div>
    );
}

export default OurMembers;