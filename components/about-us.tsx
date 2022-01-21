import {BgAboutUs} from '../constant/images/images';
import {IconGood} from '../constant/images/icons';
import AppButton from './common/app-button';

function AboutUs(){
    const {AboutUsBg} = BgAboutUs;
    const {GoodIcon} = IconGood;
    return (
        <div className="AboutUs-container" >
            <h1 className="mb-5" id="about">About Us</h1>
            <div className="aboutItemWrap">
                <div className="AboutUsCardBg">
                    <div className="Bg-coop"> <AboutUsBg/></div>
                </div>
                <div className="AboutUsCard">
                    <p>
                            Plom Cooperative Society has an ever expanding
                            community of members across Nigeria, a community
                            dedicated to helping one another grow, by offering
                            financial advice and consultation, support and loans to
                            our members, be it personal or business loan
                        <br/>
                        <br/>
                            We have a team of financial experts on ground to provide
                            you free consultation and everythingl you need to
                            succeed, grow and take charge of your future.
                        <br/>
                        <br/>
                        <div className="wrapAboutUs mb-2"> <GoodIcon/><div className="ms-2">Highly Competent Professionals</div></div>
                        <div className="wrapAboutUs mb-2"><GoodIcon/><div className="ms-2">Debt Consolidation</div></div>
                        <div className="wrapAboutUs mb-2"><GoodIcon/><div className="ms-2">Efficiency</div></div>
                    </p>
                    <AppButton text="Make an Appointment"/>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;