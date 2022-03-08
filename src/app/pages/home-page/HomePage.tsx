import React from 'react';
import EmojiHand from "./../../components/emoji-hand/EmojiHand";
import {useNavigate} from "react-router-dom";
import {PageProps} from "../Page";
import {Flex} from "../../components/flex/Flex";
import {Toolbar, ToolbarItem} from "../../components/toolbar/Toolbar";
import {Text, Title} from "../../components/text/Text";
import {lightTheme, styled} from "../../../theme/theme";
import profile from './../../assets/images/profile.png';
import twitter from './../../assets/images/twitter.svg';
import github from './../../assets/images/github.svg';
import linkedin from './../../assets/images/linkedin.svg';

const BrandIcon = styled('img');

export default function HomePage({theme, toggleTheme}: PageProps) {
    const navigate = useNavigate();

    return (
        <div>
            <Toolbar>
                <ToolbarItem href="#home"> 💻 </ToolbarItem>
                <div>
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
                </div>
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
                  css={{height: '100vh', px: '16px'}}
                  id="about">
                <img src={profile} alt="profile" width={200}/>
                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Text css={{textAlign: 'center'}}>
                        I'm front-end developer based in the Brazil. <br/>
                        With more than 3 years working with full stack development, <br/>
                        more than 10 programming languages
                        and many tools and frameworks
                    </Text>
                </Flex>
            </Flex>

            <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                  css={{height: '100vh', px: '16px'}}
                  id="projects">
                <Flex direction={'col'} alignItems={'start'} justifyContent={'center'}>
                    <Text>- Ceofood</Text>
                    <Text>- Odontolive</Text>
                    <Text>- Onde Ir</Text>
                    <Text>- Force in Solution</Text>
                </Flex>
            </Flex>

            <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}
                  css={{height: '100vh', px: '16px'}}
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

            <Flex color={'gray'} direction={'col'} alignItems={'center'} justifyContent={'center'} css={{p: '16px'}}
                  id="footer">
                <Text css={{textAlign: 'center'}}>
                    Developed by xDellTog {(theme === lightTheme) ? '🖤' : '🤍'}
                </Text>
            </Flex>
        </div>
    );
}
