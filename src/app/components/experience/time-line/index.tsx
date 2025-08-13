import { FunctionComponent } from 'react'
import { EndedAtStyled, StartedAtStyled, TimeLineStyed } from './styles'
import { format } from 'date-fns'

interface Props {
    startedAt: string
    endedAt?: string
}

const TimeLine: FunctionComponent<Props> = ({ startedAt, endedAt }) => {
    const formatedStartedAt = startedAt ? format(new Date(startedAt), 'MMM yyyy') : ''
    const formatedEndeddAt = endedAt ? format(new Date(endedAt), 'MMM yyyy') : 'Present'
    return (
        <TimeLineStyed>
            <EndedAtStyled>{formatedEndeddAt}</EndedAtStyled>
            <StartedAtStyled>{formatedStartedAt}</StartedAtStyled>
        </TimeLineStyed>
    )
}
export default TimeLine
