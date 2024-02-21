import Link from 'next/link';

export default function BlogPostArchives() {
    return (
        <div className="single-sidebar-widget">
            <h3 className="sidebar-widget-title">Post Archives</h3>
            <ul className="sidebar-post-archives">
                <li>
                    <Link href="/blog">October 2023</Link> (8)
                </li>
                <li>
                    <Link href="/blog">November 2023</Link> (6)
                </li>
                <li>
                    <Link href="/blog">December 2023</Link> (7)
                </li>
                <li>
                    <Link href="/blog">January 2024</Link> (4)
                </li>
                <li>
                    <Link href="/blog">February 2024</Link> (3)
                </li>
            </ul>
        </div>
    );
}
