import { FunctionComponent, useEffect, useState } from 'react'
import { ExperienceCardStyled, ExperinceDescriptionContainerStyled, SkillsContainerStyled } from './styles'
import TimeLine from './time-line'
import { MDX } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { format } from 'date-fns'

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
    const [formatedStartedAt, setFormatedStartedAt] = useState<string>('')
    const [formatedEndeddAt, setFormatedEndeddAt] = useState<string>('')
    useEffect(() => {
        setFormatedStartedAt(format(new Date(startedAt), 'MMM yyyy'))
        setFormatedEndeddAt(endedAt ? format(new Date(endedAt), 'MMM yyyy') : 'Present')
    }, [])

    return (
        <ExperienceCardStyled>
            <TimeLine startedAt={formatedStartedAt} endedAt={formatedEndeddAt} />
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
