import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import HomeBlogItems from '@/components/HomeBlog/HomeBlogItems';

export default function HomeBlog() {
    return (
        <section className="section-padding" id="blog">
            <div className="container">
                <SectionHeading
                    heading="Blog"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo necessitatibus atque, veniam, odit quis porro pariatur."
                />
                {/* Home Blog Items */}
                <HomeBlogItems />
                <div className="row">
                    <div className="home-blog-view-btn">
                        <Link className="tem-btn" href="/blog">
                            <span>View More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
