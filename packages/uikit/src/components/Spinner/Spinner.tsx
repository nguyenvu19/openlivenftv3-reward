import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import { SpinnerProps } from "./types";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 70 }) => {
  return (
    <Container>
      <FloatingPanIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
