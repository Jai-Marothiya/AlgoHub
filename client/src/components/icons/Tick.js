import { SvgIcon } from "@mui/material";
import React from "react";

const Tick = ({ width, height }) => {
  return (
    <SvgIcon sx={{ width, height, mr: 1 }}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_90_6638)">
          <path
            d="M4.16669 10L8.33335 14.1667L16.6667 5.83337"
            stroke="#4764EA"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_90_6638">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default Tick;
