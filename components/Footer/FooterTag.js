import Link from 'next/link';
import blogData from '@/data/blog/blog.json';

export default function FooterTag() {
    const allTagVal = [...new Set(blogData.map((tagVal) => tagVal.tag))];
    const allTagFlat = allTagVal.flat();

    return (
        <div className="single-footer-widget">
            <h3 className="footer-widget-title">Tag cloud</h3>
            <div className="tagcloud">
                {allTagFlat &&
                    allTagFlat.map((val, idx) => (
                        <Link key={idx} href="/blog">
                            {val}
                        </Link>
                    ))}
            </div>
        </div>
    );
}
