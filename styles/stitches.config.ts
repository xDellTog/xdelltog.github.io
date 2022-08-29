import {
    amber,
    amberDark,
    blue,
    blueDark,
    gray,
    grayDark,
    green,
    greenDark,
    mauve,
    mauveDark,
    purple,
    purpleDark,
    red,
    redDark,
    slate,
    slateDark,
} from '@radix-ui/colors';
import {createStitches} from '@stitches/react';

export const {css, styled, createTheme, getCssText} = createStitches({
    utils: {
        p: (value: any) => ({
            paddingLeft: value,
            paddingRight: value,
            paddingTop: value,
            paddingBottom: value,
        }),
        pt: (value: any) => ({
            paddingTop: value,
        }),
        pr: (value: any) => ({
            paddingRight: value,
        }),
        pb: (value: any) => ({
            paddingBottom: value,
        }),
        pl: (value: any) => ({
            paddingLeft: value,
        }),
        px: (value: any) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: any) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        m: (value: any) => ({
            marginLeft: value,
            marginRight: value,
            marginTop: value,
            marginBottom: value,
        }),
        mx: (value: any) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: any) => ({
            marginTop: value,
            marginBottom: value,
        }),
    },
    theme: {
        fonts: {
            system: '-apple-system, sans-serif',
        },
        shadows: {
            ...mauve,
            ...mauveDark,
        }
    },
    media: {
        xs: '(min-width: 0)',
        sm: '(min-width: 576px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 992px)',
        xl: '(min-width: 1200px)',
        xxl: '(min-width: 1400px)',
    },
});

export const lightTheme = createTheme('light-theme', {
    colors: {
        ...gray,
        ...blue,
        ...amber,
        ...red,
        ...green,
        ...purple,
        ...slate,
        ...mauve,
    },
});

export const darkTheme = createTheme('dark-theme', {
    colors: {
        ...grayDark,
        ...blueDark,
        ...amberDark,
        ...redDark,
        ...greenDark,
        ...purpleDark,
        ...slateDark,
        ...mauveDark,
    },
});

export const ThemeRoot = styled('div', {
    // transition: 'all 200ms ease-in-out',
    fontFamily: '$system',
    backgroundColor: '$mauve1',
    color: '$mauve12',
});