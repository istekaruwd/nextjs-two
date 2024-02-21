import Link from 'next/link';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa6';
import pageBannerBG from '@/public/assets/img/page-header/bg.jpg';

export default function PageHeader({ heading, title }) {
    return (
        <section className="page-banner">
            <div className="page-banner-bg">
                <Image src={pageBannerBG} alt="Page Banner BG" priority />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-banner-con">
                            <h2>{heading}</h2>
                            <ul className="tem-breadcrumb">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <FaAngleRight />
                                </li>
                                <li>{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
