import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import FunFacts from '@/components/FunFacts/FunFacts';
import HomeBlog from '@/components/HomeBlog/HomeBlog';
import Partners from '@/components/Partners/Partners';
import Portfolio from '@/components/Portfolio/Portfolio';
import PricingPlan from '@/components/PricingPlan/PricingPlan';
import Skills from '@/components/Skills/Skills';
import Slider from '@/components/Slider/Slider';
import Team from '@/components/Team/Team';
import Testimonial from '@/components/Testimonial/Testimonial';
import VideoModal from '@/components/VideoModal/VideoModal';

export default function Home() {
    return (
        <main>
            <Slider />
            <About />
            <Portfolio />
            <FunFacts />
            <Skills />
            <Team />
            <VideoModal />
            <PricingPlan />
            <Testimonial />
            <Partners />
            <HomeBlog />
            <Contact />
        </main>
    );
}
