import Link from 'next/link';
import { FaRegCalendarDays } from 'react-icons/fa6';
import blogData from '@/data/blog/blog.json';

export default function FooterRecentPost() {
    return (
        <div className="single-footer-widget widget_recent_entries">
            <h3 className="footer-widget-title">Recent Post</h3>
            <ul>
                {blogData &&
                    blogData.map((value, index) => (
                        <li key={index}>
                            <Link href={`/blog/${value.slug}`}>
                                {value.title}
                            </Link>
                            <span className="post-date">
                                <FaRegCalendarDays />
                                {value.publishDate}
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
