import { DefaultTheme, css } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  gray: {
    default: '#000',
    gray10: '#2e2e2e',
    gray20: '#404040',
    gray30: '#595959',
    gray40: '#737373',
    gray50: '#8c8c8c',
    gray60: '#a6a6a6',
    gray70: '#bfbfbf',
    gray80: '#d9d9d9',
    gray90: '#f2f2f2',
    gray100: '#ffffff'
  },
  palette: {
    blue10: '#F1FBFE',
    blue20: '#E0F6FD',
    blue30: '#C0EDFB',
    blue40: '#A1E4F9',
    blue50: '#82DBF7',
    blue60: '#65BEDA',
    blue70: '#4C8FA4',
    blue80: '#335F6D',
    blue90: '#193037'
  },
  boxShadow: {
    shadow10: css`
      box-shadow: 0 10px 34px rgba(0 0 0/0.08);
    `,
    shadow20: css`
      box-shadow: 0 4px 12px rgba(0 0 0/0.12);
    `,
    shadow30: css`
      box-shadow: 0 12px 60px rgba(0 0 0/0.1);
    `,
    shadow40: css`
      box-shadow: 0 35px 64px rgba(0 0 0/0.24);
    `
  },
  textSize: {
    S12W400: css`
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 100%;
    `,
    S12W500: css`
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 120%;
    `,

    S12W700: css`
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 120%;
    `,

    S14W400: css`
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 120%;
    `,

    S14W500: css`
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 120%;
    `,

    S14W700: css`
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 120%;
    `,

    S16W400: css`
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 120%;
    `,

    S16W500: css`
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 120%;
    `,

    S16W700: css`
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 120%;
    `,

    S18W400: css`
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 120%;
    `,

    S18W500: css`
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 120%;
    `,

    S18W700: css`
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 120%;
    `,

    S20W400: css`
      font-weight: 400;
      font-size: 2rem;
      line-height: 140%;
    `,

    S20W500: css`
      font-weight: 500;
      font-size: 2rem;
      line-height: 140%;
    `,

    S20W700: css`
      font-weight: 700;
      font-size: 2rem;
      line-height: 140%;
    `,

    S28W400: css`
      font-weight: 400;
      font-size: 2.8rem;
      line-height: 160%;
    `,

    S28W500: css`
      font-weight: 500;
      font-size: 2.8rem;
      line-height: 160%;
    `,

    S28W700: css`
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 160%;
    `,

    S32W400: css`
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 160%;
    `,
    S32W500: css`
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 160%;
    `,
    S32W700: css`
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 160%;
    `,
    S64W700: css`
      font-weight: 700;
      font-size: 6.4rem;
      line-height: 160%;
    `
  },
  media: {
    mobile: `screen and (max-width: 767px)`
  }
};
