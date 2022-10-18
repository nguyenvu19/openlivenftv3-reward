import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 25 25" {...props}>
      <path
        d="M21.3496 11.947V7.68698C21.3496 3.65698 20.4096 2.64697 16.6296 2.64697H9.06961C5.28961 2.64697 4.34961 3.65698 4.34961 7.68698V18.947C4.34961 21.607 5.80962 22.237 7.57962 20.337L7.5896 20.327C8.4096 19.457 9.6596 19.527 10.3696 20.477L11.3796 21.827"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0496 22.047C20.8169 22.047 22.2496 20.6143 22.2496 18.847C22.2496 17.0797 20.8169 15.647 19.0496 15.647C17.2823 15.647 15.8496 17.0797 15.8496 18.847C15.8496 20.6143 17.2823 22.047 19.0496 22.047Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.8496 22.647L21.8496 21.647"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.84961 7.64697H16.8496" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.84961 11.647H15.8496" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
