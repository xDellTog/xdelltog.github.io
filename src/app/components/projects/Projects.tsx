import React from "react";

import {Autoplay, EffectFade} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Flex} from "../flex/Flex";
import {ProjectImage} from "../project-image/ProjectImage";
import odontolive1 from "../../assets/images/odontolive1.png";
import odontolive2 from "../../assets/images/odontolive2.png";
import odontolive3 from "../../assets/images/odontolive3.png";
import ondeir1 from "../../assets/images/ondeir1.png";
import ondeir2 from "../../assets/images/ondeir2.png";
import fis1 from "../../assets/images/fis1.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import {Text, Title} from "../text/Text";

export function Projects() {
    return (
        <Swiper modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                effect={'fade'}
                allowTouchMove={false}
                autoplay={{
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    stopOnLastSlide: false,
                    delay: 12000,
                }}
                style={{width: '100vw'}}>
            <SwiperSlide>
                <Flex direction={'row'} css={{minHeight: '100vh'}}>
                    <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                          css={{my: 16, '@md': {width: '50vw'}, backgroundColor: '$slate1'}}>
                        <Swiper modules={[Autoplay, EffectFade]}
                                slidesPerView={1}
                                effect={'fade'}
                                allowTouchMove={false}
                                autoplay={{
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                    stopOnLastSlide: false,
                                    delay: 3000,
                                }}
                                style={{width: '100%'}}>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={false} image={ondeir1}/>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={false} image={ondeir2}/>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </Flex>
                    <Flex direction={'col'} alignItems={'start'} justifyContent={'center'}
                          css={{m: 16, backgroundColor: '$slate1'}}>
                        <Title>
                            Odontolive
                        </Title>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum facilis
                            laboriosam perspiciatis? Aspernatur<sup>*</sup> earum eius inventore itaque laudantium nam
                            natus odio
                            officiis, optio placeat quisquam sapiente sunt velit. Laudantium.
                        </Text>
                        <small>
                            <sup>*</sup>Only available in Brazil
                        </small>
                    </Flex>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex direction={'row'} css={{minHeight: '100vh'}}>
                    <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                          css={{my: 16, '@md': {width: '50vw'}, backgroundColor: '$slate1'}}>
                        <Swiper modules={[Autoplay, EffectFade]}
                                slidesPerView={1}
                                effect={'fade'}
                                autoplay={{
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                    stopOnLastSlide: false,
                                    delay: 3000,
                                }}
                                style={{width: '100%'}}>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive1}/>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive2}/>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive3}/>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </Flex>
                    <Flex direction={'col'} alignItems={'start'} justifyContent={'center'}
                          css={{m: 16, backgroundColor: '$slate1'}}>
                        <Title>
                            Odontolive
                        </Title>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto atque
                            dignissimos, dolor dolorem error facilis fugit illo ipsa laboriosam laborum laudantium
                            nesciunt perferendis repellat repudiandae sed temporibus vero vitae!
                        </Text>
                        <small>
                            <sup>*</sup>Only available in Brazil
                        </small>
                    </Flex>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex direction={'row'} css={{minHeight: '100vh'}}>
                    <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                          css={{my: 16, '@md': {width: '50vw'}, backgroundColor: '$slate1'}}>
                        <Swiper modules={[Autoplay, EffectFade]}
                                slidesPerView={1}
                                effect={'fade'}
                                autoplay={{
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                    stopOnLastSlide: false,
                                    delay: 3000,
                                }}
                                style={{width: '100%'}}>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive1}/>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive2}/>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive3}/>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </Flex>
                    <Flex direction={'col'} alignItems={'start'} justifyContent={'center'}
                          css={{m: 16, backgroundColor: '$slate1'}}>
                        <Title>
                            Odontolive
                        </Title>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem, dignissimos
                            incidunt magni provident quam repudiandae. Blanditiis earum impedit in modi necessitatibus
                            nobis nulla repudiandae. Assumenda commodi facere odit quos.
                        </Text>
                        <small>
                            <sup>*</sup>Only available in Brazil
                        </small>
                    </Flex>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex direction={'row'} css={{minHeight: '100vh'}}>
                    <Flex direction={'col'} alignItems={'center'} justifyContent={'center'}
                          css={{my: 16, '@md': {width: '50vw'}, backgroundColor: '$slate1'}}>
                        <Swiper modules={[Autoplay, EffectFade]}
                                slidesPerView={1}
                                effect={'fade'}
                                autoplay={{
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                    stopOnLastSlide: false,
                                    delay: 3000,
                                }}
                                style={{width: '100%'}}>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive1}/>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive2}/>
                                </Flex>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                    <ProjectImage smartphone={true} image={odontolive3}/>
                                </Flex>
                            </SwiperSlide>
                        </Swiper>
                    </Flex>
                    <Flex direction={'col'} alignItems={'start'} justifyContent={'center'}
                          css={{m: 16, backgroundColor: '$slate1'}}>
                        <Title>
                            Odontolive
                        </Title>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci amet
                            aspernatur assumenda beatae consectetur delectus eum exercitationem fugiat, in labore
                            laboriosam laudantium, libero numquam, perferendis repudiandae sint vero voluptas!
                        </Text>
                        <small>
                            <sup>*</sup>Only available in Brazil
                        </small>
                    </Flex>
                </Flex>
            </SwiperSlide>
        </Swiper>
    );
}
