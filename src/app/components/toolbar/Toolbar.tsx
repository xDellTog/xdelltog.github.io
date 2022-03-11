import {styled} from "../../../theme/theme";

export const Toolbar = styled('div', {
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    width: '100%',
    top: 0,
    background: '$mauve1',
    color: '$mauve12',
    display: 'flex',

    // '@xs': {
    //     display: 'none',
    // },
    // '@sm': {
    //     display: 'flex',
    // },
})

export const ToolbarItem = styled('a', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$mauve1',
    color: '$mauve12',
    padding: 16,
    textDecoration: 'none',

    '&:hover': {
        background: '$mauve5',
        cursor: 'pointer',
    },

    '&:focus': {
        background: '$mauve6',
    },
});
