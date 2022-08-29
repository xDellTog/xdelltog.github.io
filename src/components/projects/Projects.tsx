import React, {useEffect, useState} from "react";
import {Autoplay, EffectFade, Navigation} from "swiper";
import {Swiper as SwiperInternal, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import {styled} from "../../../styles/stitches.config";
import {ToolbarItem} from "../toolbar/Toolbar";
import {Text} from "../text/Text";
import {prefix} from "../../constants";

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
                `${prefix}/images/projects/ceofood/ceofood1.png`,
                `${prefix}/images/projects/ceofood/lojista1.png`,
            ],
            previewImages: [
                `${prefix}/images/projects/ceofood/ceofood2.png`,
                `${prefix}/images/projects/ceofood/ceofood3.png`,
                `${prefix}/images/projects/ceofood/ceofood4.png`,
                `${prefix}/images/projects/ceofood/cliente1.png`,
                `${prefix}/images/projects/ceofood/cliente2.png`,
                `${prefix}/images/projects/ceofood/cliente3.png`,
                `${prefix}/images/projects/ceofood/cliente4.png`,
                `${prefix}/images/projects/ceofood/cliente5.png`,
                `${prefix}/images/projects/ceofood/cliente6.png`,
                `${prefix}/images/projects/ceofood/cliente7.png`,
                `${prefix}/images/projects/ceofood/lojista2.png`,
                `${prefix}/images/projects/ceofood/lojista3.png`,
                `${prefix}/images/projects/ceofood/lojista4.png`,
                `${prefix}/images/projects/ceofood/lojista5.png`,
                `${prefix}/images/projects/ceofood/lojista6.png`,
                `${prefix}/images/projects/ceofood/ecommerce1.png`,
                `${prefix}/images/projects/ceofood/ecommerce2.png`,
                `${prefix}/images/projects/ceofood/ecommerce3.png`,
            ]
        },
        {
            id: 'odontolive',
            name: 'Odontolive',
            url: 'https://odontolive.com',
            images: [
                `${prefix}/images/projects/odontolive/odontolive1.png`,
                `${prefix}/images/projects/odontolive/credenciado1.png`,
            ],
            previewImages: [
                `${prefix}/images/projects/odontolive/odontolive2.png`,
                `${prefix}/images/projects/odontolive/odontolive3.png`,
                `${prefix}/images/projects/odontolive/odontolive4.png`,
                `${prefix}/images/projects/odontolive/credenciado2.png`,
                `${prefix}/images/projects/odontolive/credenciado3.png`,
                `${prefix}/images/projects/odontolive/credenciado4.png`,
            ]
        },
        {
            id: 'ondeir',
            name: 'Onde Ir',
            url: 'https://ondeircidades.com.br',
            images: [
                `${prefix}/images/projects/ondeir/ondeir1.png`,
            ],
            previewImages: [
                `${prefix}/images/projects/ondeir/ondeir2.png`,
                `${prefix}/images/projects/ondeir/ondeir3.png`,
                `${prefix}/images/projects/ondeir/ondeir4.png`,
            ]
        },
        {
            id: 'fis',
            name: 'Force in Solution Mobile',
            url: 'https://apps.apple.com/br/app/fis-force-in-solution/id1573821800',
            images: [
                `${prefix}/images/projects/fis/fis1.png`,
                `${prefix}/images/projects/fis/web1.png`,
            ],
            previewImages: [
                `${prefix}/images/projects/fis/fis2.png`,
                `${prefix}/images/projects/fis/fis3.png`,
                `${prefix}/images/projects/fis/fis4.png`,
                `${prefix}/images/projects/fis/web1.png`,
                `${prefix}/images/projects/fis/web2.png`,
                `${prefix}/images/projects/fis/web3.png`,
                `${prefix}/images/projects/fis/web4.png`,
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
        <>
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
                {projects.map((project, index: number) => (
                    <Box key={`project_image_${index}`}
                         css={{
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
                            {project.images.map((image, index: number) => (
                                <SwiperSlide key={`project_swiper_${index}`}>
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

                {projects.map((project, index: number) => (
                    <Box key={`project_image_${index}`}
                         css={{
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
                            {project.previewImages.map((previewImage, index: number) => (
                                <SwiperSlide key={`project_swiper_${index}`}>
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
            <Text css={{m: 16, fontSize: 16}}>
                {"* These aren't my designs, just code."}
            </Text>
        </>
    );
}
