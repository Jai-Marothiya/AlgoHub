import { SvgIcon } from "@mui/material";
import React from "react";

const ALogo = ({ width, height }) => {
  return (
    <SvgIcon sx={{ width, height }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.46207 5.11774L11.6217 0.237226C11.8017 -0.086342 12.2859 -0.076938 12.4523 0.253362L23.9287 23.0293C24.1547 23.4779 23.8161 24 23.2992 24H18.1684C17.4549 24 16.8038 23.6074 16.491 22.9886L8.40402 7.9907C7.94353 7.07975 7.96514 6.01068 8.46207 5.11774Z"
          fill="url(#paint0_linear_453_10348)"
        />
        <path
          d="M3.40037 17.6337L0.103137 22.8609C-0.180754 23.311 0.154967 23.8875 0.700968 23.8875H4.73549C5.87533 23.8875 6.93272 23.314 7.52537 22.3745L10.8226 17.1472C11.1065 16.6971 10.7708 16.1207 10.2248 16.1207L6.19024 16.1207C5.05041 16.1207 3.99303 16.6941 3.40037 17.6337Z"
          fill="url(#paint1_linear_453_10348)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_453_10348"
            x1="12.365"
            y1="-0.0519857"
            x2="12.365"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2084FE" />
            <stop offset="1" stop-color="#055AE2" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_453_10348"
            x1="12.365"
            y1="-0.0519857"
            x2="12.365"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2084FE" />
            <stop offset="1" stop-color="#055AE2" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ALogo;
