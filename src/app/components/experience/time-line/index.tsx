import { FunctionComponent, useEffect, useState } from 'react'
import { EndedAtStyled, StartedAtStyled, TimeLineStyed } from './styles'
import { format } from 'date-fns'

interface Props {
    startedAt: string
    endedAt?: string
}

const TimeLine: FunctionComponent<Props> = ({ startedAt, endedAt }) => {
    const [formatedStartedAt, setFormatedStartedAt] = useState<string>('')
    const [formatedEndeddAt, setFormatedEndeddAt] = useState<string>('')
    useEffect(() => {
        setFormatedStartedAt(format(new Date(startedAt), 'MMM yyyy'))
        setFormatedEndeddAt(endedAt ? format(new Date(endedAt), 'MMM yyyy') : 'Present')
    }, [])

    return (
        <TimeLineStyed>
            <EndedAtStyled>{formatedEndeddAt}</EndedAtStyled>
            <StartedAtStyled>{formatedStartedAt}</StartedAtStyled>
        </TimeLineStyed>
    )
}
export default TimeLine
