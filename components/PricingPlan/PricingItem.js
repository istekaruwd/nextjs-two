import Image from 'next/image';
import Link from 'next/link';
import pricingData from '@/data/pricingplan/pricingplan.json';

export default function PricingItem() {
    return (
        <div className="row">
            {pricingData &&
                pricingData.map((value, index) => (
                    <div key={index} className="col-md-4">
                        <div className="single-pricing-table">
                            <div className="single-pricing-hdr">
                                <div className="pricing-icon">
                                    <Image
                                        src={value.icon}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        alt={value.planName}
                                    />
                                </div>
                                <h4>{value.planName}</h4>
                                <h3>{value.planPrice}</h3>
                                <span>{value.subscribePlan}</span>
                            </div>
                            <div className="single-pricing-body">
                                <ul>
                                    {value.planFeatures.map((val, idx) => (
                                        <li key={idx}>{val}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="single-pricing-btn">
                                <Link href={value.btnLink} className="tem-btn">
                                    <span>{value.btnText}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
