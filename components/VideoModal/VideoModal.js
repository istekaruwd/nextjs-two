'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';
import ModalVideo from 'react-modal-video';
import videoModalBG from '@/public/assets/img/video-modal/bg.jpg';

export default function VideoModal() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="video-area section-padding">
            <div className="video-modal-bg">
                <Image src={videoModalBG} priority alt="Video Modal BG" />
            </div>
            <div className="container">
                <div className="video-btn">
                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="3qyhgV0Zew0"
                        onClose={() => setOpen(false)}
                    />
                    <button onClick={() => setOpen(true)}>
                        <span className="icon">
                            <FaPlay />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
