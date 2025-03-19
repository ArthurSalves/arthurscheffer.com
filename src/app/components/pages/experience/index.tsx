'use client'
import { FunctionComponent } from 'react'
import Section from '../../section'
import { experiences } from '@/content/experience'
import ExperienceCard from '../../experience'

const ExperienceScreen: FunctionComponent = () => {
    return (
        <>
            <Section id="experience" title="Experience">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} description={experience?.body} />
                ))}
            </Section>

            <Section id="contact" title="Contact">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vel ipsa. Fugit, in. Totam ullam et
                magni tempore quam delectus voluptatum. Possimus qui fugit illum laborum quis optio recusandae. Ea!
            </Section>
        </>
    )
}
export default ExperienceScreen
