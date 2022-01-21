
import register from '../../public/images/reg.svg';
import login from '../../public/images/login.svg';
import plomSm from '../../public/images/plom-sm.svg';
import plomBg from '../../public/images/plom-bg.svg';
import recoverPassword from '../../public/images/recover.svg';
// import appLogo from '../../public/images/appLogoo.png';
import appBorderLine from '../../public/images/DashLine.svg';
// import lightAppLogo from '../../public/images/logo-light.png';
import homeImg from '../../public/images/imgHome.png';
import smHomeimg from '../../public/images/Mask Group.svg';
import financialjouney from '../../public/images/financialjouney.png';
import ourMenbers from '../../public/images/ourMembers.svg';
import bg from '../../public/images/another.png';
import testmonyImg from '../../public/images/testimony.svg';



function AppLogo() {
    return <img src={plomSm} alt={plomSm} width="100px" height="100px"/>;
}
function AppLogoLight() {
    return <img src={plomBg} alt={plomBg} />;
}
function RegisterImg() {
    return <img src={register} alt={register} />;
}
function LoginImg() {
    return <img src={login} alt={login} />;
}
function RecoverPasswordImg() {
    return <img src={recoverPassword} alt={recoverPassword} />;
}
function Curve() {
    return <img src={testmonyImg} alt={testmonyImg} />;
}
function appBorder() {
    return <img src={appBorderLine} alt={appBorderLine} />;
}
function HomeImg() {
    return <img src={homeImg} alt={homeImg} />;
}
function PlomLogo() {
    return <img src={plomBg} alt={plomBg} width="400px"/>;
}
function Finance() {
    return <img src={financialjouney} alt={financialjouney} />;
}
function Members() {
    return <img src={ourMenbers} alt={ourMenbers} />;
}
function AboutUsBg() {
    return <img src={bg} alt={bg} />;
}
function SmallHomeImg() {
    return <img src={smHomeimg} alt={smHomeimg} />;
}

export const SmallScreenImg = {
    SmallHomeImg, 
};
export const TestmoniesCurve = {
    Curve, 
};
export const appBdLine = {
    MyDashboardBorderLine: appBorder, 
};
export const LoginImages = {
    LoginImg, 
};
export const RegisterImages = {
    RegisterImg, 
};
export const RecoverPasswordImages = {
    RecoverPasswordImg, 
};
export const LayoutImages = {
    AppLogo, 
};
export const LightLogo = {
    AppLogoLight,
};
export const ImgHome = {
    HomeImg,
};
export const PlomCooperative = {
    PlomLogo,
};
export const FinancialJouney = {
    Finance,
};
export const OurMember = {
    Members,
};
export const BgAboutUs = {
    AboutUsBg,
};


export default {
    RegisterImages,
    LoginImages,
    RecoverPasswordImages,
    appBdLine,
    LayoutImages,
    LightLogo,
    ImgHome,
    FinancialJouney,
    OurMember,
    BgAboutUs,
    TestmoniesCurve,
    SmallScreenImg
};