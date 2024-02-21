'use client';
import { useState } from 'react';
import PortfolioWorksNav from '@/components/Portfolio/PortfolioWorksNav';
import PortfolioWorksItems from '@/components/Portfolio/PortfolioWorksItems';
import portfolioData from '@/data/portfolio/portfolio.json';

export default function PortfolioWorks() {
    const [activeIndex, setActiveIndex] = useState(portfolioData);

    return (
        <div className="row">
            <div className="col-lg-12">
                {/* Portfolio Nav */}
                <PortfolioWorksNav
                    portfolioData={portfolioData}
                    setActiveIndex={setActiveIndex}
                />

                {/* Portfolio Items */}
                <PortfolioWorksItems activeIndex={activeIndex} />
            </div>
        </div>
    );
}
