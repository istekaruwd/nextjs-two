'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import sliderData from '@/data/slider/slider.json';

export default function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section id="home" className="banner-area">
            <Swiper
                loop={true}
                navigation
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Autoplay, FreeMode, Thumbs]}
                className="banner-slide"
            >
                {sliderData &&
                    sliderData.map((value, index) => (
                        <SwiperSlide key={index}>
                            <div className="single-banner">
                                <div className="itembg">
                                    {/* BG Image */}
                                    <Image
                                        src={value.bg}
                                        alt={value.title}
                                        width={1920}
                                        height={1280}
                                    />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-8">
                                            <div className="single-banner-con">
                                                <h1>{value.title}</h1>
                                                <p>{value.shortDescription}</p>
                                                <Link
                                                    href={value.btnLink}
                                                    className="tem-btn"
                                                >
                                                    <span>{value.btnText}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="banner-thumb"
            >
                {sliderData &&
                    sliderData.map((val, idx) => (
                        <SwiperSlide key={idx} className="singel-thumb">
                            <Image
                                src={val.bg}
                                alt={val.title}
                                width={1920}
                                height={1280}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}
