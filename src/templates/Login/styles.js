import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.fourthColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Login = styled.div`
  ${({ theme }) => css`
    width: max-content;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border: 2px solid ${theme.colors.primaryColor};
    border-radius: 10px;

    h4 {
      align-self: center;
      margin-bottom: ${theme.spacings.medium};
    }

    input {
      margin-bottom: ${theme.spacings.small};
    }

    button {
      margin-top: ${theme.spacings.small};
    }

    div {
      align-self: center;
    }
  `}
`;