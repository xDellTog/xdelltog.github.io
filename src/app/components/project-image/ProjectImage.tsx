import {Flex} from "../flex/Flex";
import React from "react";
import {styled} from "../../../theme/theme";

const Image = styled("img");

export type OdontoliveProps = {
    image: any,
}

export function ProjectImage({image}: OdontoliveProps) {
    return (
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
    );
}
