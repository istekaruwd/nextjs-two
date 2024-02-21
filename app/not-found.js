import Link from 'next/link';
import PageHeader from '@/components/PageHeader/PageHeader';

export default function NotFound() {
    return (
        <main>
            <PageHeader heading="404 Error" title="404 Error" />
            <section className="section-padding">
                <div className="container">
                    <div className="not-found-con">
                        <div className="error">
                            <h1>404</h1>
                            <h1>404</h1>
                        </div>
                        <h3>Sorry, Something Went Wrong.</h3>
                        <Link className="tem-btn" href="/blog">
                            <span>Go to homepage</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
