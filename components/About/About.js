import Image from 'next/image';
import Features from '@/components/About/Features';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import aboutThumb from '@/public/assets/img/about/about.jpg';

export default function About() {
    return (
        <section className="about-area section-padding" id="about">
            <div className="container">
                <SectionHeading
                    heading="About us"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo necessitatibus atque, veniam, odit quis porro pariatur."
                />
                <div className="row">
                    <div className="col-lg-4">
                        <div className="about-thumb">
                            <Image src={aboutThumb} alt="About Us" priority />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <Features />
                    </div>
                </div>
            </div>
        </section>
    );
}
