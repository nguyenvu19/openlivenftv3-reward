import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 25" {...props}>
    <path
      d="M12 6.06006H22"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.22 2.5H19.78C21.56 2.5 22 2.94 22 4.7V8.81C22 10.57 21.56 11.01 19.78 11.01H14.22C12.44 11.01 12 10.57 12 8.81V4.7C12 2.94 12.44 2.5 14.22 2.5Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17.5601H12"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.22 14H9.78C11.56 14 12 14.44 12 16.2V20.31C12 22.07 11.56 22.51 9.78 22.51H4.22C2.44 22.51 2 22.07 2 20.31V16.2C2 14.44 2.44 14 4.22 14Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 15.5C22 19.37 18.87 22.5 15 22.5L16.05 20.75"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 9.5C2 5.63 5.13 2.5 9 2.5L7.95001 4.25"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Icon;
