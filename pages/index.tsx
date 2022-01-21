import OurServices from 'components/home/our-services';
import AboutUs from 'components/about-us';
import FinancialJourney from 'components/financial-journey';
import Testmonies from 'components/home/testimonies';
import OurMembers from 'components/home/our-members';
import Home from '../components/home/home';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';


export default function HomePage() {

    // scroll() {
    //     const { id } = this.props;
    //     //console.log('ID is: '+id);
    //     if (!id) {
    //       return;
    //     }
    //     const element = document.querySelector(id);
    //     if (element) {
    //       // this just jumps to the element
    //       // see support:
    //       //element.scrollIntoView({block: "end", behavior: "smooth"});
    
    //       //If Firefox...
    //       if (navigator.userAgent.indexOf("Firefox") > 0) {
    //         //...use native smooth scrolling.
    //         element.scrollIntoView({block: "end", behavior: "smooth"});
    //       // If its any other browser, use custom polyfill...
    //       }else{
    //         //... luckily I have this handy polyfill...
    //         scrollIntoViewIfNeeded(element, false, {
    //           duration: 150
    //         });
    //       }
    //     }
    //   }

    //   useEffect(scroll);

    return (
        <div>
            <Home />
            <OurServices/>
            <AboutUs/>
            <FinancialJourney/>
            {/* <Testmonies/> */}
            <OurMembers/>
        </div>
    );
}

// HomePage.propTypes = {
//     id: PropTypes.string.isRequired,
//     children: PropTypes.oneOfType([
//       PropTypes.array.isRequired,
//       PropTypes.object.isRequired
//     ])
//   };