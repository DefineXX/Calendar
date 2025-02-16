import styled, { css } from "styled-components";

// Date Pick
export const DatePickContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1.2rem 0;
  margin-bottom: 1.8rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
`;

export const DatePickerArrowBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YearPickerContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const MonthPickerContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

const DatePickButtonStyles = css`
  width: fit-content;
  height: fit-content;
  padding: 0.4rem 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.MG_Grayscale.Gray_4};

  background: transparent;

  ${({ theme }) => theme.fontStyles.Header7}
  color: ${({ theme }) => theme.colors.MG_Signature.Primary_Light};
`;

export const YearPickerButton = styled.button`
  ${DatePickButtonStyles}
`;

export const MonthPickerButton = styled.button`
  ${DatePickButtonStyles}
`;
