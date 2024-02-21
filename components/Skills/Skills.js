import SectionHeading from '@/components/SectionHeading/SectionHeading';
import SkillsItems from '@/components/Skills/SkillsItems';

export default function Skills() {
    return (
        <section className="section-padding" id="skills">
            <div className="container">
                <SectionHeading
                    heading="Our Skills"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo necessitatibus atque, veniam, odit quis porro pariatur."
                />
                {/* Skills Items */}
                <SkillsItems />
            </div>
        </section>
    );
}
