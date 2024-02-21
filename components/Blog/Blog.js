import Link from 'next/link';
import Image from 'next/image';
import { FaRegCalendarDays, FaArrowRightLong, FaLink } from 'react-icons/fa6';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import blogData from '@/data/blog/blog.json';

export default function Blog() {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        {
                            /* Blog Post */

                            blogData &&
                                blogData.map((value, index) => (
                                    <article
                                        key={index}
                                        className="single-blog"
                                    >
                                        <div className="single-blog-thumb">
                                            {/* Blog Thumb */}
                                            <Image
                                                src={value.thumb}
                                                alt={value.title}
                                                width={768}
                                                height={512}
                                            />
                                            <div className="single-blog-overlay"></div>
                                            <div className="single-blog-overlay-link">
                                                <Link
                                                    href={`/blog/${value.slug}`}
                                                >
                                                    <FaLink />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="single-blog-con">
                                            <div className="single-blog-date">
                                                <FaRegCalendarDays />
                                                {value.publishDate}
                                            </div>
                                            <h3 className="single-blog-title">
                                                <Link
                                                    href={`/blog/${value.slug}`}
                                                >
                                                    {value.title}
                                                </Link>
                                            </h3>
                                            <ul className="entry-meta">
                                                <li>
                                                    By:
                                                    <Link href="/blog">
                                                        {value.blogAuthor}
                                                    </Link>
                                                </li>
                                                <li>
                                                    {(() => {
                                                        if (
                                                            value.comments &&
                                                            value.comments
                                                                .length > 1
                                                        )
                                                            return `${value.comments.length} Comments`;
                                                        if (
                                                            value.comments &&
                                                            value.comments
                                                                .length === 1
                                                        )
                                                            return `${value.comments.length} Comment`;
                                                        else return '0 Comment';
                                                    })()}
                                                </li>
                                                <li>
                                                    Category:
                                                    <Link href="/blog">
                                                        {value.category}
                                                    </Link>
                                                </li>
                                            </ul>
                                            <p>{value.excerpt}</p>
                                            <div className="single-blog-read-btn">
                                                <Link
                                                    href={`/blog/${value.slug}`}
                                                >
                                                    {value.btnText}
                                                    <FaArrowRightLong />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))
                        }

                        {/* Blog Pagination */}
                        <nav className="navigation pagination">
                            <div className="nav-links">
                                <Link className="page-numbers" href="/blog">
                                    1
                                </Link>
                                <span className="page-numbers current">2</span>
                                <span className="page-numbers dots">...</span>
                                <Link className="page-numbers" href="/blog">
                                    6
                                </Link>
                                <Link className="page-numbers" href="/blog">
                                    7
                                </Link>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        {/* Blog Sidebar */}
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
}
