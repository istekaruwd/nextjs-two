import FooterAbout from '@/components/Footer/FooterAbout';
import FooterBottom from '@/components/Footer/FooterBottom';
import FooterNavigation from '@/components/Footer/FooterNavigation';
import FooterRecentPost from '@/components/Footer/FooterRecentPost';
import FooterTag from '@/components/Footer/FooterTag';

export default function Footer() {
    return (
        <footer id="colophon" className="site-footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <FooterAbout />
                        </div>
                        <div className="col-lg-3">
                            <FooterRecentPost />
                        </div>
                        <div className="col-lg-3">
                            <FooterNavigation />
                        </div>
                        <div className="col-lg-3">
                            <FooterTag />
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <FooterBottom />
        </footer>
    );
}
