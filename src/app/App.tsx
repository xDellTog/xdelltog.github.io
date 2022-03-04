import React from 'react';
import './App.scss';
import EmojiHand from "./components/emoji-hand/EmojiHand";

function App() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
            <h1> Hi there, I'm Daniel! </h1>
            <EmojiHand/>
        </div>
    );
}

export default App;
