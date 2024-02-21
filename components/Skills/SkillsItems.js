'use client';
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ScrollTrigger from 'react-scroll-trigger';
import ProgressProvider from '@/components/Skills/ProgressProvider';
import sklillData from '@/data/skills/skills.json';

export default function SkillsItems() {
    const [skillStart, setSkillStart] = useState(false);

    return (
        <ScrollTrigger
            onEnter={() => setSkillStart(true)}
            onExit={() => setSkillStart(false)}
        >
            <div className="row">
                {sklillData &&
                    sklillData.map((skill, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className="single-skill">
                                <ProgressProvider
                                    skillStart={skillStart}
                                    valueStart={0}
                                    valueEnd={skill.skillValue}
                                >
                                    {(value) => (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${value}%`}
                                            strokeWidth={2}
                                            styles={buildStyles({
                                                rotation: 0.5,
                                                pathTransitionDuration: 3,
                                            })}
                                        />
                                    )}
                                </ProgressProvider>
                                <h3>{skill.skillName}</h3>
                            </div>
                        </div>
                    ))}
            </div>
        </ScrollTrigger>
    );
}
