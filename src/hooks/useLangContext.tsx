import {useContext} from "react";
import {LangContext, LangContextType} from "../providers/LangProvider";

const useLangContext = (): LangContextType => {
    const {
        lang,
        setLang,
        texts,
    } = useContext(LangContext);

    return {
        lang,
        setLang,
        texts,
    }
};

export default useLangContext;