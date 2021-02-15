// 여러 페이지에서 공통적으로 사용하는 헤더를 설정할때
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head } = renderPage();
        const styles = flush();

        return { html, head, styles };
    }

    render() {
        return (
            <html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                    <title>Next.js 연습</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
