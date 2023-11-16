import { DefaultTheme, css } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  gray: {
    gray00: '#fff',
    gray10: '#F5F6FA',
    gray20: '#EDF0F5',
    gray30: '#D4D7DD',
    gray40: '#B5B9C4',
    gray50: '#8A8E99',
    gray60: '#696D77',
    gray70: '#4B4E55',
    gray80: '#3A3D44',
    gray90: '#2C2E33',
    gray100: '#0F1011'
  },
  green: {
    greenLight: '#8AF53F',
    greenBasic: '#00DA71',
    greenDark: '#00BB61'
  },
  pink: {
    pinkLight: '#FCABE7',
    pinkBasic: '#FF539B',
    pinkDark: '#E9156E'
  },
  caution: {
    success: '#27C683',
    caution: '#FE5151',
    functionDimmed: 'rgba(0, 0, 0, 0.55)'
  },
  media: {
    mobile: `screen and (max-width: 767px)`
  }
};
