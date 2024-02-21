'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import partnersBG from '@/public/assets/img/partners/bg.jpg';
import partnersData from '@/data/partners/partners.json';

export default function Partners() {
    return (
        <div className="partners-area section-padding">
            <div className="partners-bg">
                <Image src={partnersBG} priority alt="Partners BG" />
            </div>
            <div className="container">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                    grabCursor={true}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    className="partners-carousel"
                >
                    {partnersData &&
                        partnersData.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="single-partner">
                                    <Link href={value.link}>
                                        <Image
                                            src={value.logoImg}
                                            width={171}
                                            height={65}
                                            alt={value.altText}
                                        />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}
