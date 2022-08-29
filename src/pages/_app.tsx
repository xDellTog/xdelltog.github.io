import type {AppProps} from 'next/app';
import '../../styles/normalize.scss';
import {ThemeProvider} from "../providers/ThemeProvider";
import Head from "next/head";
import {LangProvider} from "../providers/LangProvider";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title> Welcome to Portfolio - Daniel Tognon </title>
            </Head>

            <ThemeProvider>
                <LangProvider>
                    <Component {...pageProps} />
                </LangProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp;
