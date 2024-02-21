import Image from 'next/image';
import featuresData from '@/data/features/features.json';

export default function Features() {
    return (
        <div className="row">
            {featuresData &&
                featuresData.map((value, index) => (
                    <div key={index} className="col-md-6">
                        <div className="single-feature">
                            <div className="feature-icon">
                                <Image
                                    src={value.icon}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    alt={value.heading}
                                />
                            </div>
                            <h3>{value.heading}</h3>
                            <p>{value.shortDescription}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}
