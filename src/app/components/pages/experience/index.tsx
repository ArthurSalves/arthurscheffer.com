'use client'
import { FunctionComponent } from 'react'
import Section from '../../section'
import { experiences } from '@/content/experience'
import ExperienceCard from '../../experience'
import ContactCard from '../../footer'

const ExperienceScreen: FunctionComponent = () => {
    return (
        <>
            <Section id="experience" title="Experience">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} description={experience?.body} />
                ))}
            </Section>
        </>
    )
}
export default ExperienceScreen
