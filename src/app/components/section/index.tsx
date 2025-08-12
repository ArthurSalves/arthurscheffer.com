import { FunctionComponent } from 'react'
import { SectionStyled } from './styles'

interface Props {
    children: React.ReactNode
    title: string
    id: string
}

const Section: FunctionComponent<Props> = ({ ...props }) => {
    return (
        <SectionStyled id={props.id}>
            <h2>{props.title}</h2>
            <div>{props.children}</div>
        </SectionStyled>
    )
}
export default Section
