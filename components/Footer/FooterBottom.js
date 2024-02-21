import Link from 'next/link';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from 'react-icons/fa6';

export default function FooterBottom() {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="copyright-txt">
                            Copyright 2024
                            <Link
                                target="_blank"
                                href="https://themeforest.net/user/coderhut"
                            >
                                CoderHut
                            </Link>
                            | All Rights Reserved
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="footer-social-links">
                            <li>
                                <Link href="/">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <FaXTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <FaInstagram />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
