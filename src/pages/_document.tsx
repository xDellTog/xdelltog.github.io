import {Head, Html, Main, NextScript} from "next/document";
import {prefix} from "../constants";
import {texts} from "../lang/en-us";
import {getCssText} from "../../styles/stitches.config";

const MyDocument = () => {
    return (
        <Html>
            <Head>
                <meta name="description"
                      content={`${texts?.DESCRIPTION_1}${texts?.DESCRIPTION_2}${texts?.DESCRIPTION_3}`}/>
                <meta name="theme-color" content="#FFFFFF"/>
                <link rel="manifest" href={`${prefix}/manifest.json`}/>
                <link rel="icon" href={`${prefix}/favicon.png`}/>
                <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export default MyDocument;