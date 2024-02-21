import SectionHeading from '@/components/SectionHeading/SectionHeading';
import PricingItem from '@/components/PricingPlan/PricingItem';

export default function PricingPlan() {
    return (
        <section className="section-padding" id="pricing">
            <div className="container">
                <SectionHeading
                    heading="Pricing Table"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo necessitatibus atque, veniam, odit quis porro pariatur."
                />
                <PricingItem />
            </div>
        </section>
    );
}
