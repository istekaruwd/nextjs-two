import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaXmark } from 'react-icons/fa6';
import navigationData from '@/data/navigation/navigation.json';

export default function Navigation() {
    const [show, setShow] = useState(false);

    return (
        <nav className={show ? 'main-menu show' : 'main-menu'}>
            {/* Mobile Nav Button */}
            <div className="mobile-nav">
                <div className="mobile-nav-icon" onClick={() => setShow(!show)}>
                    <span>Menu</span>
                    <span className="nav-icon">
                        {show ? <FaXmark /> : <FaBars />}
                    </span>
                </div>
            </div>

            {/* Nav Links */}
            <ul>
                {navigationData &&
                    navigationData.map((value, index) => (
                        <li key={index}>
                            <Link
                                activeClass="active"
                                to={value.link}
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={500}
                            >
                                {value.title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
    );
}
