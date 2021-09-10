import { GetStaticProps } from 'next';
import Navbar from '../components/Navbar';





export default function Home(): JSX.Element {

    return (
        <>
            <Navbar />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: 60 * 60 * 24, // 24 Horas
    };
};
