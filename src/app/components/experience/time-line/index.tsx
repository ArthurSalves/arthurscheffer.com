import { FunctionComponent } from 'react'
import { EndedAtStyled, StartedAtStyled, TimeLineStyed } from './styles'

interface Props {
    startedAt: string
    endedAt?: string
}

const TimeLine: FunctionComponent<Props> = ({ startedAt, endedAt }) => {

    return (
        <TimeLineStyed>
            <EndedAtStyled>{endedAt}</EndedAtStyled>
            <StartedAtStyled>{startedAt}</StartedAtStyled>
        </TimeLineStyed>
    )
}
export default TimeLine
