import Image from 'next/image';
import Link from 'next/link';
import { FaLink, FaCalendarDays, FaArrowRightLong } from 'react-icons/fa6';
import blogData from '@/data/blog/blog.json';

export default function HomeBlogItems() {
    return (
        <div className="row">
            {
                /* Home Blog Post */

                blogData &&
                    blogData.map((value, index) => (
                        <div key={index} className="col-lg-4">
                            <article className="single-home-blog">
                                <div className="home-blog-thumb">
                                    <Image
                                        src={value.thumb}
                                        alt={value.title}
                                        width={768}
                                        height={512}
                                    />
                                    <div className="home-blog-overlay"></div>
                                    <div className="home-blog-overlay-link">
                                        <Link href={`/blog/${value.slug}`}>
                                            <FaLink />
                                        </Link>
                                    </div>
                                </div>
                                <div className="home-blog-con">
                                    <h3 className="home-blog-title">
                                        <Link href={`/blog/${value.slug}`}>
                                            {value.title}
                                        </Link>
                                    </h3>
                                    <div className="home-blog-date">
                                        <FaCalendarDays />
                                        {value.publishDate}
                                    </div>
                                    <p>{value.excerpt}</p>
                                    <div className="home-blog-read-btn">
                                        <Link href={`/blog/${value.slug}`}>
                                            {value.btnText}
                                            <FaArrowRightLong />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))
            }
        </div>
    );
}
