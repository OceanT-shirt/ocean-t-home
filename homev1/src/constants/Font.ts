import tw from 'twin.macro';

export enum FontType {
    SUB = 'main_normal',
    MAIN = 'large_bold',
    SMALL_NORMAL = 'small_normal',
    TITLE4 = 'littletitle',
    TITLE3 = 'subtitle',
    TITLE2 = 'title',
    TITLE1 = 'exlarge_bold',
    TAG = 'tag',
}

export const FontStyles = {
    exsmall_normal: tw`font-normal text-xs`, //400 0.75rem
    small_normal: tw`font-normal text-sm`, //400 0.75rem
    small_bold: tw`font-medium text-sm`, //700 0.75rem
    main_normal: tw`font-medium text-base`, //500 1rem
    large_normal: tw`font-medium text-xl`, //500 1.25rem
    large_bold: tw`font-medium text-2xl`, //700 1.25rem
    exlarge_bold: tw`font-['Babylonica'] text-4xl`,
    title: tw`font-bold text-3xl`,
    subtitle: tw`font-bold text-lg`,
    littletitle: tw`font-bold text-base`,
    tag: tw`font-semibold text-xs`,
};

// eslint-disable-next-line
export const applyFont = (fontType: FontType) => FontStyles[fontType];