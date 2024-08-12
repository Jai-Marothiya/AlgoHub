import { SvgIcon } from "@mui/material";
import React from "react";

const StarIcon = ({ width, height, fill = "" }) => {
  return (
    <SvgIcon sx={{ width, height, fill }}>
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6907 19.2934L5.49006 23.0793L6.86556 15.0608L1.03223 9.38261L9.08223 8.21594L12.6826 0.920776L16.2829 8.21594L24.3329 9.38261L18.4996 15.0608L19.8751 23.0793L12.6907 19.2934Z"
          stroke="#415DDD"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default StarIcon;
