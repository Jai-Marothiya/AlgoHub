import { SvgIcon } from "@mui/material";
import React from "react";

const ALogo = ({ width, height }) => {
  return (
    <SvgIcon sx={{ width, height }}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6537 0.833242L23.7647 23.2296C23.931 23.5648 23.6871 23.9581 23.3129 23.9581H14.9912C14.8209 23.9581 14.6643 23.8752 14.5737 23.7311C13.7345 22.3941 9.51464 15.4057 9.17438 9.54126C8.99799 6.50116 10.9005 2.5037 11.7931 0.812C11.9799 0.457935 12.4758 0.474624 12.6537 0.833242Z"
          fill="url(#paint0_linear_127_2629)"
        />
        <path
          d="M8.94917 23.958H0.731469C0.356655 23.958 0.112783 23.5636 0.280203 23.2283L6.18499 12.4009C6.31353 12.1435 6.62643 12.051 6.85455 12.2264C7.71531 12.8882 9.6097 14.7124 10.2227 18.2965C10.8911 22.2044 9.71375 23.2234 9.3014 23.7893C9.21965 23.9015 9.08799 23.958 8.94917 23.958Z"
          fill="url(#paint1_linear_127_2629)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_127_2629"
            x1="16.7133"
            y1="0.504483"
            x2="16.7133"
            y2="23.9581"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2084FE" />
            <stop offset="1" stop-color="#055AE2" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_127_2629"
            x1="5.16987"
            y1="10.9282"
            x2="5.16987"
            y2="23.958"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0753CD" />
            <stop offset="1" stop-color="#2084FE" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ALogo;
