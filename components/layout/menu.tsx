import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Menu = (props: any) => {
    const { menu } = props;

    return(
        <div className="dashboard-icons-wrap">
            <Link href={menu.href}>
                <a href={menu.href} className="dashboard-links">
                    <Image src={menu.image} width={30} height={30} />
                    <p className="mt-4 ms-3 text-white">{menu.title}</p>
                </a>
            </Link>
        </div>
    );
};

Menu.propTypes = {
    menu: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Menu;
