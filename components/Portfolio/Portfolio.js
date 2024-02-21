import SectionHeading from '@/components/SectionHeading/SectionHeading';
import PortfolioWorks from '@/components/Portfolio/PortfolioWorks';

export default function Portfolio() {
    return (
        <section
            className="portfolio-area section-padding bg-alt"
            id="portfolio"
        >
            <div className="container">
                <SectionHeading
                    heading="Our recent work"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo necessitatibus atque, veniam, odit quis porro pariatur."
                />
                {/* Portfolio Works */}
                <PortfolioWorks />
            </div>
        </section>
    );
}
