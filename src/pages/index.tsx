import React, {useEffect} from 'react';
import EmojiHand from "../components/emoji-hand/EmojiHand";
import {Flex} from "../components/flex/Flex";
import {Toolbar, ToolbarGroup, ToolbarItem} from "../components/toolbar/Toolbar";
import {Text, Title} from "../components/text/Text";
import {Projects} from "../components/projects/Projects";
import {lightTheme, styled} from "../../styles/stitches.config";
import {NextPage} from "next";
import useThemeContext from "../hooks/useThemeContext";
import Image from "next/image";
import {prefix} from "../constants";
import {texts} from "../lang/en-us";

const BrandIcon = styled(Image);

const Home: NextPage = () => {
    // const {lang, setLang, texts} = useLangContext();
    const {theme, toggleTheme} = useThemeContext();

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
                }}>
                    <div style={{transform: 'rotate(90deg)'}}>|||</div>
                </ToolbarItem>
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
                    <ToolbarItem onClick={() => setShowMenu(false)} href="#home"> {texts.HOME} </ToolbarItem>
                    <ToolbarItem onClick={() => setShowMenu(false)} href="#about"> {texts.ABOUT} </ToolbarItem>
                    <ToolbarItem onClick={() => setShowMenu(false)} href="#projects"> {texts.PROJECTS} </ToolbarItem>
                    <ToolbarItem onClick={() => setShowMenu(false)} href="#contact"> {texts.CONTACT} </ToolbarItem>
                    {/*<ToolbarItem onClick={() => {*/}
                    {/*    setLang((lang === 'pt-br') ? 'en-us' : 'pt-br');*/}
                    {/*}}>*/}
                    {/*    {(lang === 'pt-br') ?*/}
                    {/*        (<Text>🇧🇷</Text>) :*/}
                    {/*        (<Text>🇺🇸</Text>)}*/}
                    {/*</ToolbarItem>*/}
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
                    <ToolbarItem href="#about"> {texts.ABOUT} </ToolbarItem>
                    <ToolbarItem href="#projects"> {texts.PROJECTS} </ToolbarItem>
                    <ToolbarItem href="#contact"> {texts.CONTACT} </ToolbarItem>
                    {/*<ToolbarItem onClick={() => {*/}
                    {/*    setLang((lang === 'pt-br') ? 'en-us' : 'pt-br');*/}
                    {/*}}>*/}
                    {/*    {(lang === 'pt-br') ?*/}
                    {/*        (<Text>🇧🇷</Text>) :*/}
                    {/*        (<Text>🇺🇸</Text>)}*/}
                    {/*</ToolbarItem>*/}
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
                    <Title css={{textAlign: 'center'}}>
                        {texts.HI_THERE}
                    </Title>
                    <EmojiHand/>
                </Flex>
                <Text css={{textAlign: 'center'}}>
                    {texts.WEB_MOBILE_DEVELOPER}
                </Text>
            </Flex>

            <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                  css={{height: '100vh', px: '16px', backgroundColor: '$mauve2', color: '$mauve12'}}
                  id="about">
                <Image src={`${prefix}/images/profile.png`} alt="profile" width={200} height={200}/>
                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Text css={{textAlign: 'center'}}>
                        {texts.DESCRIPTION_1} <br/>
                        {texts.DESCRIPTION_2} <br/>
                        {texts.DESCRIPTION_3}
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
                    <BrandIcon src={`${prefix}/images/icons/linkedin.svg`} alt="linkedin" width={24} height={24}
                               css={{filter: (theme === lightTheme) ? '' : 'invert(1)'}}/>
                    <Text css={{textAlign: 'center', marginLeft: 4}}> LinkedIn </Text>
                </ToolbarItem>
                <ToolbarItem css={{mx: 8}} href="https://github.com/xdelltog" target="_blank">
                    <BrandIcon src={`${prefix}/images/icons/github.svg`} alt="github" width={24} height={24}
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
};

export default Home;
