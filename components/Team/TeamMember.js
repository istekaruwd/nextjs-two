import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import teamData from '@/data/team/team.json';

export default function TeamMember() {
    return (
        <div className="row">
            {teamData &&
                teamData.map((value, index) => (
                    <div key={index} className="col-md-4">
                        <div className="single-team-member">
                            <div className="single-team-thumb">
                                {/* Team Thumb */}
                                <Image
                                    src={value.thumb}
                                    width={500}
                                    height={500}
                                    alt={value.name}
                                />
                            </div>
                            <div className="single-team-con">
                                <div className="single-team-txt">
                                    {/* Team Soclial */}
                                    <ul>
                                        <li>
                                            <Link href={value.facebookUrl}>
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={value.twitterUrl}>
                                                <FaXTwitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={value.linkedinInUrl}>
                                                <FaLinkedinIn />
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* Team Content */}
                                    <h3>
                                        {value.name}
                                        <span>{value.designation}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
