import AboutCard from '@/app/components/about'
import { GetServerSideProps, NextPage } from 'next'

const About: NextPage = () => {
    return <AboutCard />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    if (req.cookies.auth) {
        return {
            redirect: {
                permanent: false,
                destination: '/profiles'
            }
        }
    }
    return {
        props: {
            isMobile: false
        }
    }
}
export default About
