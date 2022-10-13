import styled from "styled-components";

export const LinkLabelFooter = styled.div<{ isPushed: boolean }>`
  display: block;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 600;
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`;
