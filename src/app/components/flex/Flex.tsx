import {styled} from "../../../theme/theme";

export const Flex = styled('div', {
    display: 'flex',

    variants: {
        color: {
            gray: {
                backgroundColor: '$mauve3',
                color: '$mauve10'
            }
        },
        direction: {
            row: {
                flexDirection: 'row',
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
        }
    }
});
