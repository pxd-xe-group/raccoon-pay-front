import { css, SerializedStyles } from 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    gray: {
      gray00: string;
      gray10: string;
      gray20: string;
      gray30: string;
      gray40: string;
      gray50: string;
      gray60: string;
      gray70: string;
      gray80: string;
      gray90: string;
      gray100: string;
    };
    green: {
      greenLight: string;
      greenBasic: string;
      greenDark: string;
    };
    pink: {
      pinkLight: string;
      pinkBasic: string;
      pinkDark: string;
    };
    caution: {
      success: string;
      caution: string;
      functionDimmed: string;
    };
    media: {
      mobile: string;
    };
  }
}
