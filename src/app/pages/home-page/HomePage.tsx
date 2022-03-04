import React from 'react';
import EmojiHand from "./../../components/emoji-hand/EmojiHand";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    function goToAbout() {
        navigate('/about');
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100">
            <div className="d-flex align-items-center justify-content-center">
                <h1 onClick={goToAbout}> Hi there, I'm Daniel! </h1>
                <EmojiHand/>
            </div>
        </div>
    );
}
