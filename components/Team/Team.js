import SectionHeading from '@/components/SectionHeading/SectionHeading';
import TeamMember from '@/components/Team/TeamMember';

export default function Team() {
    return (
        <section className="section-padding bg-alt" id="team">
            <div className="container">
                <SectionHeading
                    heading="Our Team"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo necessitatibus atque, veniam, odit quis porro pariatur."
                />
                <TeamMember />
            </div>
        </section>
    );
}
