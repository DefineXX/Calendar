import { css } from "styled-components";

const headerBaseFontStyles = css`
  font-family: "NEXON Lv2 Gothic";
  font-weight: 700;
  line-height: 120%;
`;

const bodyBaseFontStyles = css`
  font-family: "Pretendard Variable";
  font-weight: 500;
  line-height: 120%;
`;

const headerStyles = {
  Header1: css`
    ${headerBaseFontStyles}
    font-size: 6rem;
  `,
  Header2: css`
    ${headerBaseFontStyles}
    font-size: 4.8rem;
  `,
  Header3: css`
    ${headerBaseFontStyles}
    font-size: 3.6rem;
  `,
  Header4: css`
    ${headerBaseFontStyles}
    font-size: 2.4rem;
  `,
  Header5: css`
    ${headerBaseFontStyles}
    font-size: 2.1rem;
  `,
  Header6: css`
    ${headerBaseFontStyles}
    font-size: 1.8rem;
  `,
  Header7: css`
    ${headerBaseFontStyles}
    font-size: 1.4rem;
  `,
};

const bodyStyles = {
  Body1: css`
    ${bodyBaseFontStyles}
    font-size: 3.6rem;
  `,
  Body2: css`
    ${bodyBaseFontStyles}
    font-size: 2.4rem;
  `,
  Body3: css`
    ${bodyBaseFontStyles}
    font-size: 2.1rem;
  `,
  Body4: css`
    ${bodyBaseFontStyles}
    font-size: 1.8rem;
  `,
  Body5: css`
    ${bodyBaseFontStyles}
    font-size: 1.6rem;
  `,
  Body6: css`
    ${bodyBaseFontStyles}
    font-size: 1.4rem;
  `,
  Body7: css`
    ${bodyBaseFontStyles}
    font-size: 1.2rem;
  `,
};

const ExtraStyles = {
  P_48: css`
    ${bodyBaseFontStyles}
    font-size: 4.8rem;
  `,
  P_40: css`
    ${bodyBaseFontStyles}
    font-size: 4.0rem;
  `,
  P_ai: css`
    ${bodyBaseFontStyles}
    font-size: 3.6rem;
    font-weight: 900;
  `,
  Rank_Main: css`
    ${bodyBaseFontStyles}
    font-size: 2rem;
    font-weight: 900;
  `,
  Rank_Side: css`
    ${bodyBaseFontStyles}
    font-size: 9.6rem;
    font-weight: 900;
  `,
  H_Regular: css`
    ${bodyBaseFontStyles}
    font-size: 3.6rem;
    font-weight: 400;
  `,
};

const fontStyles = { ...headerStyles, ...bodyStyles, ...ExtraStyles };

export default fontStyles;
