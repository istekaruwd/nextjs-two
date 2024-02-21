'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import testiData from '@/data/testimonial/testimonial.json';

export default function TestimonialItems() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    grabCursor={true}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    className="tesimonial-caro"
                >
                    {testiData &&
                        testiData.map((value, index) => (
                            <SwiperSlide key={index}>
                                <div className="single-testimonial">
                                    <div className="single-testimonial-txt">
                                        <FaQuoteLeft className="left-icon" />
                                        {value.shortDescription}
                                        <FaQuoteRight className="right-icon" />
                                    </div>
                                    <div className="single-testimonial-author">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <Image
                                                    src={value.imgUrl}
                                                    width={70}
                                                    height={70}
                                                    alt={value.name}
                                                />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5>{value.name}</h5>
                                                {value.position}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}
