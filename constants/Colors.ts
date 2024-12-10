/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#D0487F';
const tintColorDark = '#FFF49A';

export const Colors = {
  light: {
    text: '#20414B',
    background: '#FFFDEA',
    tint: tintColorLight,
    icon: '#FFF49A',
    tabIconDefault: '#FFF49A',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#FFFDEA',
    background: '#20414B',
    tint: tintColorDark,
    icon: '#787132',
    tabIconDefault: '#787132',
    tabIconSelected: tintColorDark,
  },
  base:{
    pink:{
        darkest: '#672B43',
        dark: '#D0487F',
        medium: '#EE689E',
        light: '#FA97BF',
        lightest: '#FFEAF2',
    },
    yellow:{
        darkest: '#787132',
        dark: '#F3E254',
        medium: '#FFF06F',
        light: '#FFF49A',
        lightest: '#FFFDEA',
    },
    blue:{
        darkest: '#20414B',
        dark: '#388297',
        medium: '#5fB8D2',
        light: '#96DEF3',
        lightest: '#EAFAFF',
    },
  }
};
