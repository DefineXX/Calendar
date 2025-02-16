import styled, { css } from "styled-components";

export const MovieCalendarContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const MovieCalendarDayList = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const MovieCalendarDayItem = styled.li`
  flex: 1;
  padding: 0.8rem;
  text-align: center;
`;

export const MovieCalendarDay = styled.span`
  ${({ theme }) => theme.fontStyles.Header4}
  color: ${({ theme }) => theme.colors.MG_Signature.Primary};

  color: ${({ $sun, theme }) => $sun && theme.colors.MG_Alert.Info};
  color: ${({ $sat, theme }) => $sat && theme.colors.MG_Alert.Error};
`;

export const MovieCalendarGrid = styled.ul`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  gap: 0.8rem;
`;

export const MovieCalendarGridItem = styled.li`
  flex: 1;
`;

export const MovieCalendarUnit = styled.div`
  width: 100%;
  aspect-ratio: 168 / 220;
  padding: 1.6rem;
  text-align: right;

  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_2};

  ${({ theme }) => theme.fontStyles.Header6}
  color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_5};

  ${({ $prevNextMonth }) =>
    $prevNextMonth &&
    css`
      color: ${({ theme }) => theme.colors.MG_Grayscale.Gray_3};
    `}

  ${({ $posterUrl, $prevNextMonth }) =>
    $posterUrl &&
    (!$prevNextMonth
      ? css`
          background-image: url("${$posterUrl}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        `
      : css`
          background-image: url("${$posterUrl}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(0.5) grayscale(0.6);
        `)}
`;
