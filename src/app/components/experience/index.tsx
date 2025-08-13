'use client'
import { FunctionComponent } from 'react'
import { ExperienceCardStyled, ExperinceDescriptionContainerStyled, SkillsContainerStyled } from './styles'
import TimeLine from './time-line'
import { MDX } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { format } from 'date-fns/fp/format'
import { isServerSide } from '@/utils/runtime'

interface Props {
    companyName: string
    employmentType: string
    position: string
    startedAt: string
    endedAt?: string
    description: MDX
    skills: string[]
}

const ExperienceCard: FunctionComponent<Props> = ({
    companyName,
    employmentType,
    position,
    startedAt,
    endedAt,
    description,
    skills
}) => {
    const Content = useMDXComponent(description.code)
    const formatedStartedAt = !isServerSide() && format('MMM yyyy', new Date(startedAt))
    const formatedEndeddAt = endedAt && !isServerSide() ? format('MMM yyyy', new Date(endedAt)) : 'Present'
    return (
        <ExperienceCardStyled>
            <TimeLine startedAt={startedAt} endedAt={endedAt}></TimeLine>
            <ExperinceDescriptionContainerStyled>
                <strong>{position}</strong>
                <span>
                    {companyName}, {employmentType}
                </span>
                <p>
                    {formatedStartedAt} - {formatedEndeddAt}
                </p>

                <article>
                    <Content />
                </article>
                <SkillsContainerStyled>Skills: {skills.join(', ')}</SkillsContainerStyled>
            </ExperinceDescriptionContainerStyled>
        </ExperienceCardStyled>
    )
}
export default ExperienceCard
