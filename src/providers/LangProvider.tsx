import React, {createContext, useEffect, useState} from "react";
import {prefix} from "../constants";
import * as path from "path";
import dynamic from "next/dynamic";

export type LangContextType = {
    texts: any;
    lang: string;
    setLang: (value: string) => void;
}

export type LangProviderType = {
    children: JSX.Element;
}

export const LangContext = createContext({} as LangContextType);

export function LangProvider({children}: LangProviderType) {
    const [lang, setLang] = useState<string>('pt-br');
    const [texts, setTexts] = useState<any>({});

    useEffect(() => {
        import((`../lang/${lang}`)).then(({texts}) => {
            setTexts(texts);
        }).catch((err) => {
            console.error(err);
        });
    }, [lang]);

    return (
        <LangContext.Provider value={{texts, lang, setLang}}>
            {children}
        </LangContext.Provider>
    )
}