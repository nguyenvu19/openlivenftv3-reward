import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M19.7596 14.6927C19.7596 15.9827 20.8196 17.0327 22.1096 17.0327C22.1096 20.7827 21.1696 21.7227 17.4196 21.7227H8.03961C4.28961 21.7227 3.34961 20.7827 3.34961 17.0327V16.5727C4.63961 16.5727 5.69961 15.5127 5.69961 14.2227C5.69961 12.9327 4.63961 11.8727 3.34961 11.8727V11.4127C3.35961 7.66266 4.28961 6.72266 8.03961 6.72266H17.4096C21.1596 6.72266 22.0996 7.66266 22.0996 11.4127V12.3527C20.8096 12.3527 19.7596 13.3927 19.7596 14.6927Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0607 6.7225H7.9707L10.9007 3.7925C13.2907 1.4025 14.4907 1.4025 16.8807 3.7925L17.4807 4.3925C16.8507 5.0225 16.7007 5.9525 17.0607 6.7225Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7285 6.72266L10.7285 21.7227"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 5"
      />
    </Svg>
  );
};

export default Icon;
