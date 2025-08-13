import { FunctionComponent } from 'react'
import { EndedAtStyled, StartedAtStyled, TimeLineStyed } from './styles'
import { format } from 'date-fns/fp/format'

interface Props {
    startedAt: string
    endedAt?: string
}

function safeFormat(dateString: string, fallback: string) {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return fallback
    return format('MMM yyyy', date)
}

const TimeLine: FunctionComponent<Props> = ({ startedAt, endedAt }) => {
    const formatedStartedAt = safeFormat(startedAt, startedAt)
    const formatedEndeddAt = endedAt ? safeFormat(endedAt, endedAt) : 'Present'

    return (
        <TimeLineStyed>
            <EndedAtStyled>{formatedEndeddAt}</EndedAtStyled>
            <StartedAtStyled>{formatedStartedAt}</StartedAtStyled>
        </TimeLineStyed>
    )
}
export default TimeLine
