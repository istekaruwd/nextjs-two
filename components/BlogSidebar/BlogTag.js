import Link from 'next/link';
import blogData from '@/data/blog/blog.json';

export default function BlogTag() {
    const allTagVal = [...new Set(blogData.map((tagVal) => tagVal.tag))];
    const allTagFlat = allTagVal.flat();

    return (
        <div className="single-sidebar-widget">
            <h3 className="sidebar-widget-title">Tag cloud</h3>
            <div className="blog-tagcloud">
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
