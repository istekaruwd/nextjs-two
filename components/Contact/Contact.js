import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ContactInfo from '@/components/Contact/ContactInfo';
import ContactForm from '@/components/Contact/ContactForm';
import ContactMap from '@/components/Contact/ContactMap';

export default function Contact() {
    return (
        <>
            <section className="section-padding bg-alt" id="contact">
                <div className="container">
                    <SectionHeading
                        heading="Contact us"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo necessitatibus atque, veniam, odit quis porro pariatur."
                    />
                    <div className="row">
                        {/* Contact Info */}
                        <ContactInfo />
                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>
            {/* Contact Map */}
            <ContactMap />
        </>
    );
}
