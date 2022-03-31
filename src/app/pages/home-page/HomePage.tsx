import React, {useEffect} from 'react';
import EmojiHand from "./../../components/emoji-hand/EmojiHand";
import {PageProps} from "../Page";
import {Flex} from "../../components/flex/Flex";
import {Toolbar, ToolbarGroup, ToolbarItem} from "../../components/toolbar/Toolbar";
import {Text, Title} from "../../components/text/Text";
import {lightTheme, styled} from "../../../theme/theme";
import profile from './../../assets/images/profile.png';
import github from './../../assets/images/icons/github.svg';
import linkedin from './../../assets/images/icons/linkedin.svg';
import {Projects} from "../../components/projects/Projects";

const BrandIcon = styled('img');

// TODO: nota de somente codigo, não design dos projetos

export default function HomePage({theme, toggleTheme}: PageProps) {
    useEffect(() => {
        initSmoothScroll();
    }, []);

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const selector: any = anchor.getAttribute('href');
                const div: any = document.querySelector(selector);
                div.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    function setShowMenu(show: boolean) {
        const menu: any = document.querySelector('#menu');
        menu.style.display = show ? 'flex' : 'none';
    }

    return (
        <div>
            <Toolbar>
                <ToolbarItem href="#home"> 💻 Daniel Tognon </ToolbarItem>
                <ToolbarItem onClick={() => setShowMenu(true)} css={{
                    '@xs': {
                        display: 'inline-flex',
                    },
                    '@sm': {
                        display: 'none',
                    },
                }}> ||| </ToolbarItem>
                <ToolbarGroup id="menu" css={{
                    background: '$mauve1',
                    display: 'none',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'fixed',
                    height: '100vh',
                    width: '100vw',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,

                    '& > a': {
                        py: 32,
                    },
                }}>
                    <ToolbarItem onClick={() => setShowMenu(false)} href="#home"> Home </ToolbarItem>
                    <ToolbarItem onClick={() => setShowMenu(false)} href="#about"> About </ToolbarItem>
                    <ToolbarItem onClick={() => setShowMenu(false)} href="#projects"> Projects </ToolbarItem>
                    <ToolbarItem onClick={() => setShowMenu(false)} href="#contact"> Contact </ToolbarItem>
                    <ToolbarItem onClick={() => {
                        if (!!toggleTheme) toggleTheme();
                    }}>
                        {(theme === lightTheme) ?
                            (<Text>🌚</Text>) :
                            (<Text>🌞</Text>)}
                    </ToolbarItem>
                    <ToolbarItem onClick={() => setShowMenu(false)}> ❌ </ToolbarItem>
                </ToolbarGroup>
                <ToolbarGroup css={{
                    '@xs': {
                        display: 'none',
                    },
                    '@sm': {
                        display: 'inline-flex',
                    },
                }}>
                    <ToolbarItem href="#about"> About </ToolbarItem>
                    <ToolbarItem href="#projects"> Projects </ToolbarItem>
                    <ToolbarItem href="#contact"> Contact </ToolbarItem>
                    <ToolbarItem onClick={() => {
                        if (!!toggleTheme) toggleTheme();
                    }}>
                        {(theme === lightTheme) ?
                            (<Text>🌚</Text>) :
                            (<Text>🌞</Text>)}
                    </ToolbarItem>
                </ToolbarGroup>
            </Toolbar>

            <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                  css={{height: '100vh', px: '16px'}}
                  id="home">
                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Title css={{textAlign: 'center'}}> Hi there, I'm Daniel! </Title>
                    <EmojiHand/>
                </Flex>
                <Text css={{textAlign: 'center'}}>Web and Mobile developer</Text>
            </Flex>

            <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                  css={{height: '100vh', px: '16px', backgroundColor: '$mauve2', color: '$mauve12'}}
                  id="about">
                <img src={profile} alt="profile" width={200}/>
                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Text css={{textAlign: 'center'}}>
                        I'm front-end developer based in the Brazil. <br/>
                        With more than 3 years working with full stack development, <br/>
                        more than 10 programming languages
                        and many tools and frameworks.
                    </Text>
                </Flex>
            </Flex>

            <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                  css={{minHeight: '100vh', py: 56}}
                  id="projects">
                <Projects/>
            </Flex>

            <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}
                  css={{height: '100vh', px: '16px', backgroundColor: '$mauve2', color: '$mauve12'}}
                  id="contact">
                <ToolbarItem css={{mx: 8}} href="https://www.linkedin.com/in/daniel-tognon-703bb7162/" target="_blank">
                    <BrandIcon src={linkedin} alt="linkedin" width={24}
                               css={{filter: (theme === lightTheme) ? '' : 'invert(1)'}}/>
                    <Text css={{textAlign: 'center', marginLeft: 4}}> LinkedIn </Text>
                </ToolbarItem>
                <ToolbarItem css={{mx: 8}} href="https://github.com/xdelltog" target="_blank">
                    <BrandIcon src={github} alt="github" width={24}
                               css={{filter: (theme === lightTheme) ? '' : 'invert(1)'}}/>
                    <Text css={{textAlign: 'center', marginLeft: 4}}> GitHub </Text>
                </ToolbarItem>
                {/*<ToolbarItem css={{mx: 8}}>
                    <BrandIcon src={twitter} alt="twitter" width={24}
                               css={{filter: (theme === lightTheme) ? '' : 'invert(1)'}}/>
                    <Text css={{textAlign: 'center', marginLeft: 4}}> Twitter </Text>
                </ToolbarItem>*/}
            </Flex>

            <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                  css={{p: '16px'}}
                  id="footer">
                <Text css={{textAlign: 'center'}}>
                    <small>Designed and Developed by Me {(theme === lightTheme) ? '🖤' : '🤍'}</small>
                </Text>
            </Flex>
        </div>
    );
}
