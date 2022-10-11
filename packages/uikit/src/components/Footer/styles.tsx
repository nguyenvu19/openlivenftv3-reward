import styled from "styled-components";

export const LinkLabelFooter = styled.div<{ isPushed: boolean }>`
  display: block;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: bold;
`;
