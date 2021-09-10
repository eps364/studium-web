import { Box, Container, Typography } from '@material-ui/core'
import { GetStaticProps } from 'next'
import Head from 'next/head'

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Home | material-ui.com</title>
            </Head>
            <Container>
                <Box>
                    <Typography variant="h2" color="initial">
                        🙌 Hey, welcome!
                    </Typography>

                    <Typography variant="h4" color="initial">
                        Install the material-ui
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: 60 * 60 * 24, // 24 Horas
    }
}
