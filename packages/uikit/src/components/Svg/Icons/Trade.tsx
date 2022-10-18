import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 25" {...props}>
    <path
      d="M12.8496 5.56006H22.8496"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0696 2H20.6296C22.4096 2 22.8496 2.44 22.8496 4.2V8.31C22.8496 10.07 22.4096 10.51 20.6296 10.51H15.0696C13.2896 10.51 12.8496 10.07 12.8496 8.31V4.2C12.8496 2.44 13.2896 2 15.0696 2Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.84961 17.0601H12.8496"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.06961 13.5H10.6296C12.4096 13.5 12.8496 13.94 12.8496 15.7V19.81C12.8496 21.57 12.4096 22.01 10.6296 22.01H5.06961C3.28961 22.01 2.84961 21.57 2.84961 19.81V15.7C2.84961 13.94 3.28961 13.5 5.06961 13.5Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.8496 15C22.8496 18.87 19.7196 22 15.8496 22L16.8996 20.25"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.84961 9C2.84961 5.13 5.97961 2 9.84961 2L8.79962 3.75"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Icon;
