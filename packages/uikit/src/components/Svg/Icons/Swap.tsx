import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 22 23" {...props}>
      <path
        d="M5.9585 20.5833C8.23667 20.5833 10.0835 18.7364 10.0835 16.4583C10.0835 14.1801 8.23667 12.3333 5.9585 12.3333C3.68032 12.3333 1.8335 14.1801 1.8335 16.4583C1.8335 18.7364 3.68032 20.5833 5.9585 20.5833Z"
        stroke="#007CA1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.1667 14.25C20.1667 17.7975 17.2975 20.6667 13.75 20.6667L14.7125 19.0625"
        stroke="#007CA1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.8335 8.74992C1.8335 5.20242 4.70266 2.33325 8.25016 2.33325L7.28767 3.93742"
        stroke="#007CA1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9585 10.5833C19.2367 10.5833 21.0835 8.73643 21.0835 6.45825C21.0835 4.18008 19.2367 2.33325 16.9585 2.33325C14.6803 2.33325 12.8335 4.18008 12.8335 6.45825C12.8335 8.73643 14.6803 10.5833 16.9585 10.5833Z"
        stroke="#007CA1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
