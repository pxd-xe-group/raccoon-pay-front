import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
input,
textarea,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video,
button {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  color: #1a1a1a;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 100%;
  letter-spacing: 0;
  word-break: keep-all;
  vertical-align: baseline;
  font-feature-settings: "pnum" on, "lnum" on, "cv13" on, "calt" off;
}

  html {
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    border: 0;
    background-color: #f9f9f9;
    font-size: 10px;
    letter-spacing: -0.01em;
    vertical-align: baseline;
    appearance: none;
    -webkit-appearence: none;
    font-feature-settings: 'pnum' on, 'lnum' on, 'calt' off, 'cv13' on !important;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-wrap: break-word;
    
  }

  *{
    box-sizing: border-box;
    color :${({ theme }) => theme.gray.gray10};
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: none;
  }

  /* remember to define visible focus styles!
  :focus{outline:?????;}
   */

  /* remember to highlight inserts somehow! */
  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: normal;
  }

  a {
    display: inline-block;
    color:${({ theme }) => theme.gray.gray10} !important;
    text-decoration: none;
  }

  a:link,
  a:visited,
  a:active {
    color:${({ theme }) => theme.gray.gray10} !important;
    text-decoration: none;
  }

  caption,
  legend {
    display: none;
  }

  button {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }

  em {
    font-style: normal;
  }

  /* input disabled ios 기본 css reset */
  input[type='checkbox'],
  input[type='radio'] {
    &:disabled {
      & + label {
        cursor: default;
      }
    }
  }

  input[type='text'],
  input[type='number'],
  input[type='password'],
  input[type='email'],
  textarea {
    appearance: none;

    &:disabled {
      opacity: 1;
      -webkit-text-fill-color: inherit;
    }

    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
  }

  select {
    position: relative;
    appearance: none;

    /* 사파리, 크롬 하위버전용 */

    /* 사파리, 크롬 하위버전용 */
    &::-ms-expand {
      display: none;
    }
  }

  input[type='text']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  img {
    display: block;
    image-rendering: optimize-contrast;
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -ms-interpolation-mode: nearest-neighbor;
  }

  div,
  button,
  span,
  a {
    image-rendering: optimize-contrast;
  }

  video {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-mask-image: radial-gradient(white, black);
    mask-image: radial-gradient(white, black);
  }

`;
