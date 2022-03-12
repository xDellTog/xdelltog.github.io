import React, {useState} from "react";
import {Autoplay, EffectFade} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import odontolive1 from "../../assets/images/projects/odontolive/odontolive1.png";
import odontolive2 from "../../assets/images/projects/odontolive/odontolive2.png";
import odontolive3 from "../../assets/images/projects/odontolive/odontolive3.png";
import odontolive4 from "../../assets/images/projects/odontolive/odontolive4.png";
import ondeir1 from "../../assets/images/projects/ondeir/ondeir1.png";
import ondeir2 from "../../assets/images/projects/ondeir/ondeir2.png";
import ondeir3 from "../../assets/images/projects/ondeir/ondeir3.png";
import ondeir4 from "../../assets/images/projects/ondeir/ondeir4.png";
import ceofood1 from "../../assets/images/projects/ceofood/ceofood1.png";
import ceofood2 from "../../assets/images/projects/ceofood/ceofood2.png";
import ceofood3 from "../../assets/images/projects/ceofood/ceofood3.png";
import ceofood4 from "../../assets/images/projects/ceofood/ceofood4.png";
import lojista1 from "../../assets/images/projects/ceofood/lojista1.png";
import lojista2 from "../../assets/images/projects/ceofood/lojista2.png";
import ecommerce1 from "../../assets/images/projects/ceofood/ecommerce1.png";
import ecommerce2 from "../../assets/images/projects/ceofood/ecommerce2.png";
import ecommerce3 from "../../assets/images/projects/ceofood/ecommerce3.png";
import credenciado1 from "../../assets/images/projects/odontolive/credenciado1.png";
import credenciado2 from "../../assets/images/projects/odontolive/credenciado2.png";
import credenciado3 from "../../assets/images/projects/odontolive/credenciado3.png";
import credenciado4 from "../../assets/images/projects/odontolive/credenciado4.png";
import fis1 from "../../assets/images/projects/fis/fis1.png";
import fis2 from "../../assets/images/projects/fis/fis2.png";
import fis3 from "../../assets/images/projects/fis/fis3.png";
import fis4 from "../../assets/images/projects/fis/fis4.png";
import web1 from "../../assets/images/projects/fis/web1.png";
import web2 from "../../assets/images/projects/fis/web2.png";
import web3 from "../../assets/images/projects/fis/web3.png";
import web4 from "../../assets/images/projects/fis/web4.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import {styled} from "../../../theme/theme";

const Box = styled('div');
const Image = styled('img');

// TODO: PRINTS DO CEOFOOD LOJISTA

export function Projects() {
    const [projects, setProjects] = useState([{
        name: 'Ceofood',
        smartphone: false,
        images: [
            ceofood1,
            ceofood2,
            ceofood3,
            ceofood4,
        ]
    }, {
        name: 'Ceofood Lojista',
        smartphone: true,
        images: [
            lojista1,
            lojista2,
        ]
    }, {
        name: 'Ceofood E-Commerce',
        smartphone: false,
        images: [
            ecommerce1,
            ecommerce2,
            ecommerce3,
        ]
    }, {
        name: 'Odontolive',
        smartphone: true,
        images: [
            odontolive1,
            odontolive2,
            odontolive3,
            odontolive4,
        ]
    }, {
        name: 'Odontolive Credenciados',
        smartphone: true,
        images: [
            credenciado1,
            credenciado2,
            credenciado3,
            credenciado4,
        ]
    }, {
        name: 'Onde Ir',
        smartphone: false,
        images: [
            ondeir1,
            ondeir2,
            ondeir3,
            ondeir4,
        ]
    }, {
        name: 'Force in Solution Mobile',
        smartphone: true,
        images: [
            fis1,
            fis2,
            fis3,
            fis4,
        ]
    }, {
        name: 'Force in Solution Web',
        smartphone: false,
        images: [
            web1,
            web2,
            web3,
            web4,
        ]
    }]);

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <Box css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridColumnGap: '1rem',
            gridRowGap: '1rem',
            '@sm': {
                gridTemplateColumns: 'repeat(2, 1fr)'
            },
            '@md': {
                gridTemplateColumns: 'repeat(3, 1fr)'
            },
            '@lg': {
                gridTemplateColumns: 'repeat(4, 1fr)'
            }
        }}>
            {projects.map((project) => (
                <Box css={{
                    height: '80vw',
                    width: '80vw',
                    '@sm': {
                        height: '40vw',
                        width: '40vw',
                    },
                    '@md': {
                        height: '30vw',
                        width: '30vw',
                    },
                    '@lg': {
                        height: '16vw',
                        width: '16vw',
                    },
                    backgroundColor: '$mauve3',
                    overflow: 'hidden',
                    borderRadius: 16,
                }}>
                    <Swiper modules={[Autoplay, EffectFade]}
                            slidesPerView={1}
                            effect={'fade'}
                            allowTouchMove={false}
                            autoplay={{
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                                stopOnLastSlide: false,
                                delay: randomIntFromInterval(2500, 3500),
                            }}
                            style={{width: '100%', height: '100%'}}>
                        {project.images.map((image) => (
                            <SwiperSlide>
                                <Image src={image} alt="" css={{
                                    backgroundColor: '$mauve3',
                                    objectFit: project.smartphone ? 'contain' : 'cover',
                                    objectPosition: project.smartphone ? 'center' : 'center left',
                                    width: '100%',
                                    height: '100%'
                                }}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            ))}
        </Box>
    );
}
