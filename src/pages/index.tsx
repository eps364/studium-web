import { GetStaticProps } from 'next';
import ListPost from '../components/ListPost';

export default function Home(): JSX.Element {
    return (
        <ListPost />
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: 60 * 60 * 24, // 24 Horas
    };
};
