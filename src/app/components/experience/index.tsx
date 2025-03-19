import { FunctionComponent } from 'react'
import { ExperienceCardStyled, ExperinceDescriptionContainerStyled, SkillsContainerStyled } from './styles'
import TimeLine from './time-line'
import { MDX } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'

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
    return (
        <ExperienceCardStyled>
            <TimeLine startedAt={startedAt} endedAt={endedAt}></TimeLine>
            <ExperinceDescriptionContainerStyled>
                <strong>{position}</strong>
                <span>
                    {companyName}, {employmentType}
                </span>

                <article>
                    <Content />
                </article>
                <SkillsContainerStyled>Skills: {skills.join(', ')}</SkillsContainerStyled>
            </ExperinceDescriptionContainerStyled>
        </ExperienceCardStyled>
    )
}
export default ExperienceCard
