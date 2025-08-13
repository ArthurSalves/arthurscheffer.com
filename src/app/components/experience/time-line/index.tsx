import { FunctionComponent } from 'react'
import { EndedAtStyled, StartedAtStyled, TimeLineStyed } from './styles'
import { format } from 'date-fns/fp/format'

interface Props {
    startedAt: string
    endedAt?: string
}

const TimeLine: FunctionComponent<Props> = ({ startedAt, endedAt }) => {
    const formatedStartedAt = startedAt ? format('MMM yyyy', new Date(startedAt)) : '-'
    const formatedEndeddAt = endedAt ? format('MMM yyyy', new Date(endedAt)) : 'Present'
    return (
        <TimeLineStyed>
            <EndedAtStyled>{formatedEndeddAt}</EndedAtStyled>
            <StartedAtStyled>{formatedStartedAt}</StartedAtStyled>
        </TimeLineStyed>
    )
}
export default TimeLine
