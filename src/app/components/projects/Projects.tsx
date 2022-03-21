import React, {useEffect, useState} from "react";
import {Autoplay, EffectFade, Navigation} from "swiper";
import {Swiper as SwiperInternal, SwiperSlide} from "swiper/react";
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
import "swiper/css/navigation";

import {styled} from "../../../theme/theme";
import {ToolbarItem} from "../toolbar/Toolbar";

const Box = styled('div');
const Image = styled('img');
const Swiper = styled(SwiperInternal, {
    '& .swiper-button-prev': {
        color: '$mauve12',
    },
    '& .swiper-button-next': {
        color: '$mauve12',
    }
});

export function Projects() {
    const [projects] = useState([
        {
            id: 'ceofood',
            name: 'Ceofood',
            url: 'https://ceofood.com.br',
            images: [
                ceofood1,
                lojista1,
            ],
            previewImages: [
                ceofood2,
                ceofood3,
                ceofood4,
                lojista2,
                ecommerce1,
                ecommerce2,
                ecommerce3,
            ]
        },
        {
            id: 'odontolive',
            name: 'Odontolive',
            url: 'https://odontolive.com',
            images: [
                odontolive1,
                credenciado1,
            ],
            previewImages: [
                odontolive2,
                odontolive3,
                odontolive4,
                credenciado2,
                credenciado3,
                credenciado4,
            ]
        },
        {
            id: 'ondeir',
            name: 'Onde Ir',
            url: 'https://ondeircidades.com.br',
            images: [
                ondeir1,
            ],
            previewImages: [
                ondeir2,
                ondeir3,
                ondeir4,
            ]
        },
        {
            id: 'fis',
            name: 'Force in Solution Mobile',
            url: 'https://apps.apple.com/br/app/fis-force-in-solution/id1573821800',
            images: [
                fis1,
                web1,
            ],
            previewImages: [
                fis2,
                fis3,
                fis4,
                web1,
                web2,
                web3,
                web4,
            ]
        },
    ]);
    const [showPreview, setShowPreview] = useState<any>({
        ceofood: false,
        odontolive: false,
        ondeir: false,
        fis: false,
    });

    useEffect(() => {
        console.log(showPreview);
    }, [showPreview])

    function openPreview(project: any) {
        let aux = {...showPreview};
        aux[project.id] = !aux[project.id];
        setShowPreview({...aux});
    }

    function closePreview() {
        setShowPreview({
            ceofood: false,
            odontolive: false,
            ondeir: false,
            fis: false,
        });
    }

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function openLink(url: string) {
        window.open(url, '_blank');
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
                    cursor: 'pointer',
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
                            css={{width: '100%', height: '100%'}}>
                        {project.images.map((image) => (
                            <SwiperSlide>
                                <Image onClick={() => openPreview(project)} src={image} alt="" css={{
                                    backgroundColor: '$mauve3',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    width: '100%',
                                    height: '100%'
                                }}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            ))}

            {projects.map((project) => (
                <Box css={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 100000,
                    height: '100vh',
                    width: '100vw',
                    overflow: 'hidden',
                    backgroundColor: '$mauve1',
                    color: '$mauve12',
                    display: showPreview[project.id] ? 'block' : 'none',
                }}>
                    <Box css={{position: 'fixed', right: 0, top: 0, zIndex: 100001,}}>
                        <ToolbarItem onClick={closePreview}>
                            ❌
                        </ToolbarItem>
                    </Box>
                    <Swiper modules={[Autoplay, EffectFade, Navigation]}
                            slidesPerView={1}
                            effect={'fade'}
                            navigation
                            loop={true}
                            allowTouchMove={true}
                            autoplay={{
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                                stopOnLastSlide: false,
                                delay: 3000,
                            }}
                            css={{width: '100%', height: '100%'}}>
                        {project.previewImages.map((previewImage) => (
                            <SwiperSlide>
                                <Image onClick={() => openLink(project.url)} src={previewImage} alt="" css={{
                                    backgroundColor: '$mauve1',
                                    color: '$mauve12',
                                    objectFit: 'contain',
                                    objectPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                }}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            ))}
        </Box>
    );
}
