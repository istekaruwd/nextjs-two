import Link from 'next/link';
import { FaRegCalendarDays } from 'react-icons/fa6';
import blogData from '@/data/blog/blog.json';

export default function BlogRecentPost() {
    return (
        <div className="single-sidebar-widget">
            <h3 className="sidebar-widget-title">Recent Post</h3>
            <ul className="sidebar-recent-post">
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
