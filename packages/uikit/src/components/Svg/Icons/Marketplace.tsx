import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 27 26" {...props}>
      <path
        d="M19.8496 8.14697H5.84961C5.58439 8.14697 5.33004 8.25233 5.1425 8.43987C4.95497 8.6274 4.84961 8.88176 4.84961 9.14697V22.147C4.84961 22.4122 4.95497 22.6665 5.1425 22.8541C5.33004 23.0416 5.58439 23.147 5.84961 23.147H19.8496C20.1148 23.147 20.3692 23.0416 20.5567 22.8541C20.7443 22.6665 20.8496 22.4122 20.8496 22.147V9.14697C20.8496 8.88176 20.7443 8.6274 20.5567 8.43987C20.3692 8.25233 20.1148 8.14697 19.8496 8.14697Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.84961 8.14697V5.14697C8.84961 4.75301 8.95307 4.3629 9.15409 3.99892C9.35511 3.63495 9.64975 3.30423 10.0212 3.02565C10.3926 2.74708 10.8336 2.5261 11.3189 2.37533C11.8042 2.22457 12.3243 2.14697 12.8496 2.14697C13.3749 2.14697 13.895 2.22457 14.3803 2.37533C14.8656 2.5261 15.3066 2.74708 15.678 3.02565C16.0495 3.30423 16.3441 3.63495 16.5451 3.99892C16.7461 4.3629 16.8496 4.75301 16.8496 5.14697V8.14697"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
