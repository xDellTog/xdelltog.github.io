import {Flex} from "../flex/Flex";
import React from "react";
import {styled} from "../../../theme/theme";

const Image = styled("img");

export type OdontoliveProps = {
    image: any,
    smartphone: boolean,
}

export function ProjectImage({image, smartphone}: OdontoliveProps) {
    return (
        (smartphone) ? (
            <Flex alignItems={'center'} justifyContent={'center'} css={{
                borderRadius: 48,
                height: 585,
                width: 270,
                padding: 16,
                backgroundColor: '$mauve12',
                position: 'relative',
            }}>
                <Flex alignItems={'center'} justifyContent={'center'} css={{
                    borderRadius: 32,
                    height: 585,
                    width: 270,
                    backgroundColor: '$mauve1',
                    position: 'absolute',
                    overflow: 'hidden'
                }}>
                    <Image src={image} alt="" css={{height: '100%', width: '100%'}}/>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'center'} css={{
                    borderRadius: 16,
                    height: 36,
                    width: 120,
                    top: 0,
                    backgroundColor: '$mauve12',
                    position: 'absolute',
                }}>
                </Flex>
            </Flex>
        ) : (
            <Flex alignItems={'center'} justifyContent={'center'} css={{
                borderRadius: 16,
                height: 400,
                width: 600,
                pt: 24,
                pb: 4,
                px: 4,
                backgroundColor: '$mauve12',
                position: 'relative',
            }}>
                <Flex alignItems={'center'} justifyContent={'center'} css={{
                    borderRadius: 12,
                    height: 400,
                    width: 600,
                    backgroundColor: '$mauve1',
                    position: 'absolute',
                    overflow: 'hidden'
                }}>
                    <Image src={image} alt="" css={{height: '100%', width: '100%'}}/>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'center'} css={{
                    borderRadius: 100,
                    height: 12,
                    width: 12,
                    top: 6,
                    left: 32,
                    backgroundColor: '$red10',
                    position: 'absolute',
                }}/>
                <Flex alignItems={'center'} justifyContent={'center'} css={{
                    borderRadius: 100,
                    height: 12,
                    width: 12,
                    top: 6,
                    left: 32,
                    marginLeft: 16,
                    backgroundColor: '$amber10',
                    position: 'absolute',
                }}/>
                <Flex alignItems={'center'} justifyContent={'center'} css={{
                    borderRadius: 100,
                    height: 12,
                    width: 12,
                    top: 6,
                    left: 32,
                    marginLeft: 32,
                    backgroundColor: '$green10',
                    position: 'absolute',
                }}/>
            </Flex>
        )
    );
}
