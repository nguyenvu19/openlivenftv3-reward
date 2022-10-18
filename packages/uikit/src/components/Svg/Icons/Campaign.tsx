import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 25 24" {...props}>
      <path
        d="M2.84961 9V7C2.84961 4 4.84961 2 7.84961 2H17.8496C20.8496 2 22.8496 4 22.8496 7V9"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.84961 15V17C2.84961 20 4.84961 22 7.84961 22H17.8496C20.8496 22 22.8496 20 22.8496 17V15"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5498 9.25977L12.8498 12.3298L18.1098 9.27979"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.8496 17.7698V12.3198" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.6098 6.29006L8.40984 8.07009C7.68984 8.47009 7.08984 9.48008 7.08984 10.3101V13.7001C7.08984 14.5301 7.67984 15.5401 8.40984 15.9401L11.6098 17.7201C12.2898 18.1001 13.4098 18.1001 14.0998 17.7201L17.2998 15.9401C18.0198 15.5401 18.6198 14.5301 18.6198 13.7001V10.3101C18.6198 9.48008 18.0298 8.47009 17.2998 8.07009L14.0998 6.29006C13.4098 5.90006 12.2898 5.90006 11.6098 6.29006Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
