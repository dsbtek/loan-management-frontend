import Navbar from './navbar';
import Footer from './footer';

function noAuthLayout({ children }) {
    return (
        <div className="">
            <Navbar />
            <div className='no-auth-children-layout'>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default noAuthLayout;