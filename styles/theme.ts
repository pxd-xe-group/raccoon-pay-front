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
  textSize: {
    S10W400: css`
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    `,
    S10W500: css`
      font-size: 1rem;
      font-weight: 500;
      line-height: 100%;
    `,

    S10W700: css`
      font-size: 1rem;
      font-weight: 700;
      line-height: 100%;
    `,
    S12W400: css`
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
    `,
    S12W500: css`
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 120%;
    `,

    S12W700: css`
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 120%;
    `,

    S14W400: css`
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 120%;
    `,

    S14W500: css`
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 120%;
    `,

    S14W700: css`
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 120%;
    `,

    S16W400: css`
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 120%;
    `,

    S16W500: css`
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 120%;
    `,

    S16W700: css`
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 120%;
    `,

    S18W400: css`
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 120%;
    `,

    S18W500: css`
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 120%;
    `,

    S18W700: css`
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 120%;
    `,

    S20W400: css`
      font-size: 2rem;
      font-weight: 400;
      line-height: 140%;
    `,

    S20W500: css`
      font-size: 2rem;
      font-weight: 500;
      line-height: 140%;
    `,

    S20W700: css`
      font-size: 2rem;
      font-weight: 700;
      line-height: 140%;
    `,

    S24W400: css`
      font-size: 2rem;
      font-weight: 400;
      line-height: 140%;
    `,

    S24W500: css`
      font-size: 2rem;
      font-weight: 500;
      line-height: 140%;
    `,

    S24W700: css`
      font-size: 2rem;
      font-weight: 700;
      line-height: 140%;
    `,

    S28W400: css`
      font-size: 2.8rem;
      font-weight: 400;
      line-height: 160%;
    `,

    S28W500: css`
      font-size: 2.8rem;
      font-weight: 500;
      line-height: 160%;
    `,

    S28W700: css`
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 160%;
    `,

    S32W400: css`
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 160%;
    `,
    S32W500: css`
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 160%;
    `,
    S32W700: css`
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 160%;
    `,
    S36W400: css`
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 160%;
    `,
    S36W500: css`
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 160%;
    `,
    S36W700: css`
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 160%;
    `,
    S64W700: css`
      font-size: 6.4rem;
      font-weight: 700;
      line-height: 160%;
    `
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
    tablet: `screen and (max-width: 1023px)`,
    mobile: `screen and (max-width: 673px)`
  }
};
