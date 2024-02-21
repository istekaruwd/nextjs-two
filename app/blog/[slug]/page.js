import Image from 'next/image';
import Link from 'next/link';
import { FaRegCalendarDays } from 'react-icons/fa6';
import PageHeader from '@/components/PageHeader/PageHeader';
import BlogSidebar from '@/components/BlogSidebar/BlogSidebar';
import BlogComments from '@/components/BlogSingle/BlogComments';
import blogData from '@/data/blog/blog.json';

export const metadata = {
    title: 'Single Blog - Portlio',
    description:
        'Creative Agency, Corporate and Portfolio React Next Js Template',
};

export async function generateStaticParams() {
    return blogData.map((post) => ({
        postSlug: post.slug,
    }));
}

export default function singleBlogPage({ params }) {
    const { slug } = params;
    const singlePost = blogData.find((post) => post.slug.toString() === slug);

    if (!singlePost) {
        notFound();
    }
    return (
        <main>
            <PageHeader heading="Our Blog" title={singlePost.title} />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            {/* Single Blog */}
                            <article className="single-page-blog">
                                <div className="single-page-blog-thumb">
                                    {/* Blog Thumb */}
                                    <Image
                                        src={singlePost.thumb}
                                        alt={singlePost.title}
                                        width={768}
                                        height={512}
                                    />
                                    <div className="single-page-blog-overlay"></div>
                                </div>
                                <div className="single-page-blog-con">
                                    <div className="single-page-blog-date">
                                        <FaRegCalendarDays />
                                        {singlePost.publishDate}
                                    </div>
                                    <h3 className="single-page-blog-title">
                                        {singlePost.title}
                                    </h3>
                                    <ul className="single-page-entry-meta">
                                        <li>
                                            By:
                                            <Link href="/blog">
                                                {singlePost.blogAuthor}
                                            </Link>
                                        </li>
                                        <li>
                                            {(() => {
                                                if (
                                                    singlePost.comments &&
                                                    singlePost.comments.length >
                                                        1
                                                )
                                                    return `${singlePost.comments.length} Comments`;
                                                if (
                                                    singlePost.comments &&
                                                    singlePost.comments
                                                        .length === 1
                                                )
                                                    return `${singlePost.comments.length} Comment`;
                                                else return '0 Comment';
                                            })()}
                                        </li>
                                        <li>
                                            Category:
                                            <Link href="/blog">
                                                {singlePost.category}
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="single-page-blog-text">
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Quidem
                                            nisi veritatis commodi vel, nobis
                                            culpa error est pariatur ipsum
                                            obcaecati! Debitis nobis praesentium
                                            facilis repellat, dolore
                                            dignissimos?
                                        </p>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae
                                            ab illo inventore veritatis et quasi
                                            architecto beatae vitae dicta sunt
                                            explicabo.
                                        </p>
                                        <blockquote>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Adipisci at debitis deleniti
                                            dignissimos ea enim iste laboriosam
                                            nihil omnis possimus quia, tempora,
                                            totam voluptatibus! Animi
                                            consectetur dolor in laboriosam
                                            unde.
                                        </blockquote>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Adipisci at debitis deleniti
                                            dignissimos ea enim iste laboriosam
                                            nihil omnis possimus quia, tempora,
                                            totam voluptatibus! Animi
                                            consectetur dolor in laboriosam
                                            unde.
                                        </p>
                                        <blockquote>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Adipisci at debitis deleniti
                                            dignissimos ea enim iste laboriosam
                                            nihil omnis possimus quia, tempora,
                                            totam voluptatibus! Animi
                                            consectetur dolor in laboriosam
                                            unde.
                                        </blockquote>
                                        <p>
                                            Lid est laborum dolo rumes fugats
                                            untras. Etharums ser quidem rerum
                                            facilis dolores nemis omnis fugats
                                            vitaes nemo minima rerums unsers
                                            sadips amets.. Sed ut perspiciatis
                                            unde omnis iste natus error sit
                                            voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque
                                            ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae
                                            vitae dicta sunt explicabo.
                                        </p>
                                    </div>
                                </div>
                            </article>
                            {/* Blog Comments */}
                            <BlogComments singlePostData={singlePost} />
                        </div>
                        <div className="col-lg-3">
                            {/* Blog Sidebar */}
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
