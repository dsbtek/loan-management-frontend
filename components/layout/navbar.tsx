import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import ScrollTo from 'react-scroll-into-view';
import { LayoutImages } from '../../constant/images/images';


const navList = [
    {
        title: 'Home',
        href: '/#home',
    },
    {
        title: 'About',
        href: '/#about',
    },
    {
        title: 'Contact Us',
        href: '/#contactUs',
    }
];
const { AppLogo } = LayoutImages;

const NoAuthNav = () => {
    const router = useRouter();

    const checkActive = (ref) => { 
        let active;
        if (ref === '/') active = router.pathname === ref;
        else active = router.pathname.includes(ref);
        return `no-auth-nav-item ${active ? 'active' : ''}`;
    }; 
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" >
            <Container className="no-auth-nav-bar" >
                <Navbar.Brand href="#home"><AppLogo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Container className="no-auth-nav" >
                        <Nav className="justify-content-end">
                            {navList.map((nav, index) => (
                                <Nav.Item key={nav.title} >
                                    <Nav.Link  >
                                        <Link href={nav.href}>
                                            <span className={checkActive(nav.href)} >{nav.title}</span>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                            <span className='flex auth-nav'>
                                <Nav.Item>
                                    <Nav.Link  >
                                        <Link href='/register'>
                                            <span className={`auth-item ${checkActive('/register')} auth-item register`}>Register</span>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  >
                                        <Link href='/login'>
                                            <span className={`auth-item ${checkActive('/login')} auth-item`}>Login</span>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                            </span>
                        
                        </Nav>
                    
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar> );
};
export default NoAuthNav;
