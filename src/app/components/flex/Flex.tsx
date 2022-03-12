import {styled} from "../../../theme/theme";

export const Flex = styled('div', {
    display: 'flex',

    variants: {
        color: {
            gray: {
                backgroundColor: '$mauve2',
                color: '$mauve10'
            }
        },
        direction: {
            row: {
                flexDirection: 'column',

                '@md': {
                    flexDirection: 'row',
                }
            },
            col: {
                flexDirection: 'column',
            },
        },
        alignItems: {
            start: {
                alignItems: 'start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'end',
            },
        },
        justifyContent: {
            start: {
                justifyContent: 'start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'end',
            },
            around: {
                justifyContent: 'space-around',
            },
            between: {
                justifyContent: 'space-between',
            },
            evenly: {
                justifyContent: 'space-evenly',
            },
        }
    }
});
