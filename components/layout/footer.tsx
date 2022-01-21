// import Link from 'next/link';
import {PlomCooperative} from '../../constant/images/images';
import ContactUsForm from '../contact-us-form';
import {SocialIcons} from '../../constant/images/icons';

const Footer = () => {
    const {PlomLogo} = PlomCooperative;
    const {WhatAppIcon, InstagramIcon, FacebookIcon } = SocialIcons;
    return(
        <footer className='footer'>
            <div className="footer-items-wrap">
                <div className="footer-items">
                    <div className="footer-inner-item">
                        <div className="footer-img mb-5">
                            <PlomLogo/>
                        </div>
                        <div className="social-items">
                            Be Social
                            <div className="social-icons">
                                <WhatAppIcon />
                                <InstagramIcon />
                                <FacebookIcon />
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h3>All our pages</h3>
                        <p>-Home</p>
                        <p>-About</p>
                        <p>-Community</p>
                        <p>-Members</p>
                    </div>
                </div>
                <div className='contact-form'>
                    <ContactUsForm  />
                </div>
            </div>
            <div className="trade-mark">
                PLOM App 2021 (c) All rights reserved.
            </div>
        </footer>
    );
};

 
export default Footer;