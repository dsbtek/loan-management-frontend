import { Carousel } from 'react-bootstrap';
import {TestmoniesCurve} from '../../constant/images/images';
import ImageAvatars from '../avater';
import {UserIcon} from '../../constant/images/icons';


const testMonies = [
    
    {
        name: 'Bello Abu',
        testify: 'I have been a proud member of Asusu Cooperative for over 2 years now and to be candid with you i am so far satisfied with their services, i hope they reach out to more people to help them, just the way they helped me.',
        image: UserIcon
    }
];
         

function Testmonies(){
    const {Curve} = TestmoniesCurve;
    return (
        <div className="testMonieContainer">
            <div className='testmonyCurve'>
                <Curve />
            </div>
            <h2> Testimonies</h2>
            <p className="mb-5">What people are saying about us</p>
            <Carousel>
                <Carousel.Item className="">
                    <div className="wrapCarousel">
                        <div className="testMonieCard">
                            <p>
                              I have been a proud member of Asusu Cooperative for over 2 years 
                              now and to be candid with you i am so far satisfied with their services,
                              i hope they reach out to more people to help them, just the way they helped me.
                            </p>
                            {/* <ImageAvatars text={Bello Isah} /> */}
                            
                            <p>Mechanic</p>
                        </div>
                        <div className="testMonieCard">
                            <p>
                              I have been a proud member of Asusu Cooperative for over 2 years 
                              now and to be candid with you i am so far satisfied with their services,
                              i hope they reach out to more people to help them, just the way the helped me.
                            </p>
                            {/* <ImageAvatars text={undefined} children={undefined} /> */}

                            <h3>Aisha Isah</h3>
                            <p>Mechanic</p>
                        </div>

                        <div className="testMonieCard">
                            <p>
                              I have been a proud member of Asusu Cooperative for over 2 years 
                              now and to be candid with you i am so far satisfied with their services,
                              i hope they reach out to more people to help them, just the way the helped me.
                            </p>
                            {/* <ImageAvatars text={undefined} children={undefined} /> */}
                            <h3>Umar Isah</h3>
                            <p>Mechanic</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Testmonies;