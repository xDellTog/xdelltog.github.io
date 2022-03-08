import React from 'react';
import EmojiHand from "./../../components/emoji-hand/EmojiHand";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    function goToAbout() {
        navigate('/about');
    }

    return (
        <div>
            <nav className="position-fixed w-100 top-0 d-flex p-3 align-items-center justify-content-between bg-slate">
                <a href="#home" className="btn fw-light">
                    <h1 className="m-0">💻</h1>
                </a>
                <div className="d-flex align-items-center justify-content-end">
                    <a href="#about" className="btn fw-light">
                        About
                    </a>
                    <a href="#projects" className="btn fw-light">
                        Projects
                    </a>
                    <a href="#contact" className="btn fw-light">
                        Contact
                    </a>
                </div>
            </nav>

            <section className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100"
                     id="home">
                <div className="d-flex align-items-center justify-content-center">
                    <h1 onClick={goToAbout}> Hi there, I'm Daniel! </h1>
                    <EmojiHand/>
                </div>
                <h5 className="fw-light">Web and Mobile developer</h5>
            </section>

            <section className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100"
                     id="about">
                <h1>👨🏻‍💻</h1>
                <div className="row col-12 col-md-8">
                    <h3 className="text-center fw-light">
                        I'm front-end developer based in the Brazil. <br/>
                        With more than 3 years working with full stack development, <br/>
                        more than 10 programming languages
                        and many tools and frameworks
                    </h3>
                </div>
            </section>

            <section className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100"
                     id="projects">
                <h1>👨🏻‍💻</h1>
                <div className="row col-12 col-md-8">
                    <h3 className="text-center fw-light">
                        I'm front-end developer based in the Brazil. <br/>
                        With more than 3 years working with full stack development, <br/>
                        more than 10 programming languages
                        and many tools and frameworks
                    </h3>
                </div>
            </section>
        </div>
    );
}
