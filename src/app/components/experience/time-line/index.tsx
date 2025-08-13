import { FunctionComponent } from 'react'
import { EndedAtStyled, StartedAtStyled, TimeLineStyed } from './styles'
// import { format } from 'date-fns/fp/format'

interface Props {
    startedAt: string
    endedAt?: string
}

const TimeLine: FunctionComponent<Props> = () => {
    // const formatedStartedAt = format('MMM yyyy', new Date(startedAt))
    // const formatedEndeddAt = endedAt ? format('MMM yyyy', new Date(endedAt)) : 'Present'
    return (
        <TimeLineStyed>
            <EndedAtStyled>{'teste'}</EndedAtStyled>
            <StartedAtStyled>{'teste'}</StartedAtStyled>
        </TimeLineStyed>
    )
}
export default TimeLine
