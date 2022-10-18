import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M4.8385 14.6604L3.31852 13.1404C2.69852 12.5204 2.69852 11.5004 3.31852 10.8804L4.8385 9.36039C5.0985 9.10039 5.30851 8.59038 5.30851 8.23038V6.08036C5.30851 5.20036 6.02851 4.48038 6.90851 4.48038H9.05851C9.41851 4.48038 9.92851 4.27041 10.1885 4.01041L11.7085 2.49039C12.3285 1.87039 13.3485 1.87039 13.9685 2.49039L15.4885 4.01041C15.7485 4.27041 16.2585 4.48038 16.6185 4.48038H18.7685C19.6485 4.48038 20.3685 5.20036 20.3685 6.08036V8.23038C20.3685 8.59038 20.5785 9.10039 20.8385 9.36039L22.3585 10.8804C22.9785 11.5004 22.9785 12.5204 22.3585 13.1404L20.8385 14.6604C20.5785 14.9204 20.3685 15.4304 20.3685 15.7904V17.9403C20.3685 18.8203 19.6485 19.5404 18.7685 19.5404H16.6185C16.2585 19.5404 15.7485 19.7504 15.4885 20.0104L13.9685 21.5304C13.3485 22.1504 12.3285 22.1504 11.7085 21.5304L10.1885 20.0104C9.92851 19.7504 9.41851 19.5404 9.05851 19.5404H6.90851C6.02851 19.5404 5.30851 18.8203 5.30851 17.9403V15.7904C5.30851 15.4204 5.0985 14.9104 4.8385 14.6604Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.84961 15L15.8496 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.3441 14.5H15.3531" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.3441 9.5H10.3531" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
