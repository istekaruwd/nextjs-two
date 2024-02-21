import SectionHeading from '@/components/SectionHeading/SectionHeading';
import TestimonialItems from '@/components/Testimonial/TestimonialItems';

export default function Testimonial() {
    return (
        <section className="section-padding bg-alt" id="testimonial">
            <div className="container">
                <SectionHeading
                    heading="Testimonial"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo necessitatibus atque, veniam, odit quis porro pariatur."
                />
                <TestimonialItems />
            </div>
        </section>
    );
}
