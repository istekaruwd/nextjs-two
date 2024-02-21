import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUpRightFromSquare, FaRegEye } from 'react-icons/fa6';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { motion } from 'framer-motion';

export default function PortfolioWorksItems({ activeIndex }) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '.worksLightBox',
            children: '.singleWorksLightBox a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 319: 1, 767: 2, 991: 3 }}>
            <Masonry gutter="30px" className="worksLightBox">
                {activeIndex &&
                    activeIndex.map((val, idx) => (
                        <motion.div
                            key={idx}
                            className="single-portfolio"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="port-con">
                                {/* Portfolio Works Image */}
                                <Image
                                    src={val.thumb}
                                    width={val.thumbWidth}
                                    height={val.thumbHeight}
                                    alt="Portfolio Works Image"
                                    priority
                                />
                                <div className="port-txt">
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <FaArrowUpRightFromSquare />
                                            </Link>
                                        </li>
                                        <li className="singleWorksLightBox">
                                            <Link
                                                href={val.thumb}
                                                data-pswp-width={val.thumbWidth}
                                                data-pswp-height={
                                                    val.thumbHeight
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaRegEye />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="port-overlay"></div>
                            </div>
                        </motion.div>
                    ))}
            </Masonry>
        </ResponsiveMasonry>
    );
}
