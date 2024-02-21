import Link from 'next/link';

export default function BlogPostCategories() {
    return (
        <div className="single-sidebar-widget">
            <h3 className="sidebar-widget-title">Post Categories</h3>
            <ul className="sidebar-post-categories">
                <li>
                    <Link href="/blog">Web Development</Link> (8)
                </li>
                <li>
                    <Link href="/blog">Graphic Design</Link> (6)
                </li>
                <li>
                    <Link href="/blog">Print Design</Link> (4)
                </li>
                <li>
                    <Link href="/blog">Marketing</Link> (2)
                </li>
                <li>
                    <Link href="/blog">App Design</Link> (1)
                </li>
            </ul>
        </div>
    );
}
