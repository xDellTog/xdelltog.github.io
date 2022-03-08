import {styled} from "../../../theme/theme";

export const Toolbar = styled('div', {
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    width: '100%',
    top: 0,
    background: '$slate1',
    color: '$slate12',
    '@xs': {
        display: 'none',
    },
    '@sm': {
        display: 'flex',
    },
})

export const ToolbarItem = styled('a', {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$slate1',
    color: '$slate12',
    padding: 16,
    textDecoration: 'none',

    '&:hover': {
        background: '$slate5',
        cursor: 'pointer',
    },

    '&:focus': {
        background: '$slate6',
    },
});
