import Image from 'next/image';
import contactInfoData from '@/data/contact/contactinfo.json';

export default function ContactInfo() {
    return (
        <div className="col-lg-3">
            {contactInfoData &&
                contactInfoData.map((value, index) => (
                    <div key={index} className="single-contact-info">
                        <div className="contact-info-icon">
                            <Image
                                src={value.icon}
                                width="0"
                                height="0"
                                sizes="100vw"
                                alt="Contact Info Icon"
                            />
                        </div>
                        <div className="text">
                            {value.info.map((val, idx) => (
                                <span key={idx}>{val}</span>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
}
