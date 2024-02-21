import { useState } from 'react';

export default function PortfolioWorksNav({ portfolioData, setActiveIndex }) {
    const allCatValues = [
        'all',
        ...new Set(portfolioData.map((catElem) => catElem.category)),
    ];

    const [activePort, setActivePort] = useState('all');

    const filterItem = (cat) => {
        if (cat === 'all') {
            setActiveIndex(portfolioData);
            return;
        }
        const updateItems = portfolioData.filter((ele) => {
            return ele.category === cat;
        });
        setActiveIndex(updateItems);
    };

    return (
        <div className="portfolio-menu">
            {allCatValues &&
                allCatValues.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            filterItem(value);
                            setActivePort(value);
                        }}
                        className={`port-nav-btn ${
                            activePort === value && 'active-port'
                        }`}
                    >
                        {value}
                    </button>
                ))}
        </div>
    );
}
