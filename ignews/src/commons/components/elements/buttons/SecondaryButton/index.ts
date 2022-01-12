import styled from 'styled-components';

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.gray700};
  transition: filter 0.2s ease-in;

  &:hover {
    filter: brightness(0.9);
  }
`;
