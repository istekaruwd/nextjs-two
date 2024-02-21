'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Header/Navigation';
import logoImg from '@/public/assets/img/logo.png';

export default function Header() {
    const [fixed, setFixed] = useState(false);

    const navFixed = () => {
        let heightToShow = 84;

        if (window.scrollY >= heightToShow) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', navFixed);
        return () => window.removeEventListener('scroll', navFixed);
    }, []);

    return (
        <header className={fixed ? 'site-header fixed-nav' : 'site-header'}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-4 col-sm-3 col-md-2">
                        <div className="main-logo">
                            <Link href="/">
                                {/* Header Logo */}
                                <Image src={logoImg} alt="Logo" priority />
                            </Link>
                        </div>
                    </div>
                    <div className="col-8 col-sm-9 col-md-10">
                        {/* Header Navigation */}
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    );
}
