import {ImgHome, SmallScreenImg} from '../../constant/images/images';
import AppButton from '../common/app-button';
import {RandomItems} from '../../constant/images/icons';

function Home(){
    const {HomeImg} = ImgHome;
    const {SmallHomeImg} = SmallScreenImg;

    const {
        FadePoint,
        Circles,
        PoliygonDwn,
        Rectang,
    } = RandomItems;

    return (
        <div id="home">
            <div className="home-container" >
                <div className="home-item" >
                    <div className="deserveBetter">
                        <h1> You Deserve <br/> Better, with  <br/><span>Plom App</span></h1>
                    </div>
                    <AppButton text="Learn More" />
                </div>
                <div className="fade-point"><FadePoint /></div>
                <div className="circle-item"><Circles /></div>
                <div className="rectangle"><Rectang /></div>
                <div className="polydwn"><PoliygonDwn /></div>
                <div className='home-img'>
                    <HomeImg/>
                </div>
                <div className='home-small-screen-img'>
                    <SmallHomeImg />
                </div>
            </div>
        </div>
    );
}

export default Home;