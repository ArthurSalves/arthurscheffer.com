'use client'
import { FunctionComponent } from 'react'
import { Image } from '../../image'
import {
    AboutContainerStyled,
    DescriptionAboutSytled,
    ImageContainerStyled,
    TextContainerStyled,
    TitleAboutStyled
} from './styles'
import { useScrollAngle } from '@/hooks/scroll-angle'
import Section from '../../section'
import { currentExperience } from '@/content/experience'
import ExperienceCard from '../../experience'
import TypeWriter from '../../type-writer'
import Link from 'next/link'

const HomeScreen: FunctionComponent = () => {
    const angle = useScrollAngle(214, 200)

    return (
        <>
            <AboutContainerStyled angle={angle} id="about">
                <ImageContainerStyled>
                    <Image
                        src="/images/profile-photo.jpg"
                        width={225}
                        height={225}
                        alt="Arthur Scheffer's picture with a orange background"
                    />
                </ImageContainerStyled>

                <TextContainerStyled>
                    <TitleAboutStyled>
                        <TitleAboutStyled>Hey </TitleAboutStyled>
                        <Image src="/images/waving-hand.gif" width={50} height={50} alt="gif of a hand waving" />
                        <TitleAboutStyled>, Im Arthur</TitleAboutStyled>
                    </TitleAboutStyled>
                    <TypeWriter />
                    <DescriptionAboutSytled>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores non maxime voluptas,
                        ratione fuga soluta reiciendis dignissimos modi veniam corporis, quasi, iste eligendi natus
                        sequi est recusandae hic earum.
                    </DescriptionAboutSytled>
                </TextContainerStyled>
            </AboutContainerStyled>

            <Section id="experience" title="Experience">
                <ExperienceCard {...currentExperience} description={currentExperience?.body} />
                <Link href="/experience"> see more</Link>
            </Section>

            <Section id="posts" title="Posts">
                Comming Soon...
            </Section>

            <Section id="contact" title="Contact">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vel ipsa. Fugit, in. Totam ullam et
                magni tempore quam delectus voluptatum. Possimus qui fugit illum laborum quis optio recusandae. Ea!
            </Section>
        </>
    )
}
export default HomeScreen
