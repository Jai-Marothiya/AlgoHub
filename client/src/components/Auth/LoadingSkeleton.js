import { Box, Skeleton } from "@mui/material";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Skeleton variant="rectangular" height={64} width="100%" />
      <Skeleton
        variant="rectangular"
        sx={{
          height: 138,
          width: "100%",
          maxWidth: "96%",
          my: 4,
        }}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: "96%",
          pl: 2,
          pr: 2,
          display: "flex",
          marginX: "auto",
          gap: 2,
          pb: 10,
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="rectangular" width="20%" height={550} />
        <Skeleton variant="rectangular" width="76%" height={550} />
      </Box>
      <Skeleton variant="rectangular" height={50} width="100%" sx={{ mt: 2 }} />
    </Box>
  );
};

export default LoadingSkeleton;
