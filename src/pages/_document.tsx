import Document, { Head, Html, Main, NextScript } from 'next/Document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
