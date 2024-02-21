export default function SectionHeading({
    heading = 'Section Heading',
    text = 'Section Text',
}) {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className="section-title">
                    <h2>{heading}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}
