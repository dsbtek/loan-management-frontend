const getStartedIcon = '/icons/get-Started.svg';
const ourservice = '/icons/finLoan.svg';
const businessLoan = '/icons/businessLoan.svg';
const personalLoan = '/icons/personalLoan.svg';
const good = '/icons/good.svg';
const user = '/icons/user.svg';
const notify = '/icons/notify.svg';
const getstarted = '/icons/getstarted.svg';
const dashboard = '/icons/dashboard.svg';
const transactions = '/icons/transaction.svg';
const loan = '/icons/loans.svg';
const contribution = '/icons/contribution.svg';
const whatApp = '/icons/whatapp.svg';
const instagram = '/icons/instagram.svg';
const facebook = '/icons/facebook.svg';
const circle = '/icons/circle.svg';
const clearPoint = '/icons/clearPoint.svg';
const fadedMask = '/icons/fadedMask.svg';
const fadedPoints = '/icons/fadedPoints.svg';
const mask = '/icons/mask.svg';
const PolygonDwn = '/icons/PolygonDwn.svg';
const PolygonUp = '/icons/PolygonUp.svg';
const Rectangle = '/icons/Rectangle.svg';












export { getstarted };
export { dashboard };
export { transactions };
export { loan };
export { contribution };

function FadePoint() {
    return <img src={fadedPoints} alt={fadedPoints} />;
}

function Mask() {
    return <img src={mask} alt={mask} />;
}
function PoliygonUp() {
    return <img src={PolygonUp} alt={PolygonUp} />;
}

function Rectang() {
    return <img src={Rectangle} alt={Rectangle} />;
}
function FadeMask() {
    return <img src={fadedMask} alt={fadedMask} />;
}
function PoliygonDwn() {
    return <img src={PolygonDwn} alt={PolygonDwn} />;
}
function Circles() {
    return <img src={circle} alt={circle} />;
}

function SquarPoints() {
    return <img src={clearPoint} alt={clearPoint} />;
}


function WhatAppIcon() {
    return <img src={whatApp} alt={whatApp} />;
}

function InstagramIcon() {
    return <img src={instagram} alt={instagram} />;
}
function FacebookIcon() {
    return <img src={facebook} alt={facebook} />;
}

function GetStarted() {
    return <img src={getStartedIcon} alt={getStartedIcon} />;
}

function OurService() {
    return <img src={ourservice} alt={ourservice} />;
}
function BusinessLoan() {
    return <img src={businessLoan} alt={businessLoan} />;
}
function PersonalLoan() {
    return <img src={personalLoan} alt={personalLoan} />;
}
function GoodIcon() {
    return <img src={good} alt={good} />;
}


function User() {
    return <img src={user} alt={user} />;
}
function Notify() {
    return <img src={notify} alt={notify} />;
}

export const SocialIcons = {
    WhatAppIcon,
    InstagramIcon,
    FacebookIcon 
};

export const RandomItems = {
    FadePoint,
    Mask,
    SquarPoints,
    Circles,
    PoliygonDwn,
    FadeMask,
    Rectang,
    PoliygonUp
};

export const GetStartedIcon = {
    GetStarted, 
};

export const OurServicess = {
    OurService,
};
export const LoanPersonal = {
    PersonalLoan,
};

export const LoanBusiness = {
    BusinessLoan,
};
export const IconGood = {
    GoodIcon,
};
export const NotifyIcon = {
    Notify,
};
export const UserIcon = {
    User,
};

export default {
    GetStartedIcon, OurServicess,LoanBusiness,LoanPersonal,IconGood,NotifyIcon,UserIcon,SocialIcons
};
