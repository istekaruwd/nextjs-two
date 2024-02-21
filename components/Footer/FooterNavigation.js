import Link from 'next/link';

export default function FooterNavigation() {
    return (
        <div className="single-footer-widget widget_nav_menu">
            <h3 className="footer-widget-title">Quick Links</h3>
            <ul>
                <li>
                    <Link href="/">About us</Link>
                </li>
                <li>
                    <Link href="/">Portfolio</Link>
                </li>
                <li>
                    <Link href="/">Our team</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/">Contact us</Link>
                </li>
            </ul>
        </div>
    );
}
