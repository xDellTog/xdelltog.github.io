import {blue, blueDark, gray, grayDark, green, greenDark, red, redDark, slate, slateDark,} from '@radix-ui/colors';
import {createStitches} from '@stitches/react';

export const {css, styled, createTheme} = createStitches({
    utils: {
        p: (value: any) => ({
            paddingLeft: value,
            paddingRight: value,
            paddingTop: value,
            paddingBottom: value,
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
        ...red,
        ...green,
        ...slate,
    },
});

export const darkTheme = createTheme('dark-theme', {
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
        ...slateDark,
    },
});
