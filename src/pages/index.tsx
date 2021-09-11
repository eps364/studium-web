import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { GetStaticProps } from 'next'
import Footer from '../components/Footer'
import ListPost from '../components/ListPost'
import Navbar from '../components/Navbar'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
    })
)

export default function Home(): JSX.Element {
    const classes = useStyles()
    return (
        <Container>
            <Navbar />
            <Container>
                <ListPost />
            </Container>
            <Footer />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: 60 * 60 * 24, // 24 Horas
    }
}
