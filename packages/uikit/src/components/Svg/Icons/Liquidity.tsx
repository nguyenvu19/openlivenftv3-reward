import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 21 25" {...props}>
      <path
        d="M8.41748 16.5L9.72998 18L12.5737 15"
        stroke="#007CA1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.70852 2.5L4.54102 6.13"
        stroke="#007CA1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.291 2.5L16.4585 6.13"
        stroke="#007CA1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 8.3501C1.75 6.5001 2.61625 6.3501 3.6925 6.3501H17.3075C18.3838 6.3501 19.25 6.5001 19.25 8.3501C19.25 10.5001 18.3838 10.3501 17.3075 10.3501H3.6925C2.61625 10.3501 1.75 10.5001 1.75 8.3501Z"
        stroke="#007CA1"
        strokeWidth="1.5"
      />
      <path
        d="M3.0625 10.5L4.29625 19.14C4.57625 21.08 5.25 22.5 7.7525 22.5H13.0288C15.75 22.5 16.1525 21.14 16.4675 19.26L17.9375 10.5"
        stroke="#007CA1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Icon;
