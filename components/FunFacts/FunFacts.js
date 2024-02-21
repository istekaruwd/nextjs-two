'use client';
import { useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import funfactBg from '@/public/assets/img/funfact/bg.jpg';
import funfactData from '@/data/funfacts/funfacts.json';

export default function FunFacts() {
    const [counterStart, setCounterStart] = useState(false);

    return (
        <div className="funfact-area section-padding">
            <div className="funfact-bg">
                <Image src={funfactBg} alt="Fun Facts BG" priority />
            </div>
            <ScrollTrigger
                onEnter={() => setCounterStart(true)}
                onExit={() => setCounterStart(false)}
            >
                <div className="container">
                    <div className="row">
                        {funfactData &&
                            funfactData.map((value, index) => (
                                <div key={index} className="col-lg-3 col-md-6">
                                    <div
                                        className="single-fact"
                                        id={`fact-${index + 1}`}
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                {/* FunFact Icon */}
                                                <div className="fact-icon">
                                                    <Image
                                                        src={value.icon}
                                                        width="0"
                                                        height="0"
                                                        sizes="100vw"
                                                        alt={value.counterText}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <div className="counter">
                                                    {counterStart && (
                                                        <CountUp
                                                            className="fun-fact-project"
                                                            start={0}
                                                            end={
                                                                value.counterNumber
                                                            }
                                                            duration={2.75}
                                                            delay={0}
                                                        />
                                                    )}
                                                </div>
                                                <p>{value.counterText}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
}
