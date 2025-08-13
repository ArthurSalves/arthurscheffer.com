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
//import { useScrollAngle } from '@/hooks/scroll-angle'
import Section from '../../section'
import { currentExperience } from '@/content/experience'
import ExperienceCard from '../../experience'
import TypeWriter from '../../type-writer'
import Link from 'next/link'

const HomeScreen: FunctionComponent = () => {
    //const angle = useScrollAngle(214, 200)

    return (
        <>
            <AboutContainerStyled angle={200} id="about">
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
                        <Image
                            src="/images/waving-hand.gif"
                            width={50}
                            height={50}
                            alt="gif of a hand waving"
                            unoptimized
                        />
                        <TitleAboutStyled>, I&apos;m Arthur</TitleAboutStyled>
                    </TitleAboutStyled>
                    <TypeWriter />
                    <DescriptionAboutSytled>
                        I’m a software engineer with a degree in Systems Analysis and Development and 5 years of
                        experience delivering clean, scalable, and high-performance applications. I’ve built intuitive
                        front-end interfaces with modern frameworks and developed robust back-end systems and APIs. My
                        work has consistently improved delivery speed, code maintainability, and user experience,
                        leveraging best practices in architecture and DevOps.
                    </DescriptionAboutSytled>
                </TextContainerStyled>
            </AboutContainerStyled>

            <Section id="experience" title="Experience">
                <ExperienceCard {...currentExperience} description={currentExperience?.body} />
                <Link href="/experience" aria-label="See all my experiences">
                    See all my experiences &rarr;
                </Link>
            </Section>

            <Section id="posts" title="Posts">
                Comming Soon...
            </Section>
        </>
    )
}
export default HomeScreen
