import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 25 24" {...props}>
      <path
        d="M9.86961 2.84016L4.47961 7.04016C3.57961 7.74016 2.84961 9.23016 2.84961 10.3602V17.7702C2.84961 20.0902 4.73961 21.9902 7.05961 21.9902H18.6396C20.9596 21.9902 22.8496 20.0902 22.8496 17.7802V10.5002C22.8496 9.29016 22.0396 7.74016 21.0496 7.05016L14.8696 2.72016C13.4696 1.74016 11.2196 1.79016 9.86961 2.84016Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.8496 17.9902V14.9902" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
