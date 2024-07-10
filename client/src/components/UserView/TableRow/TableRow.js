import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Tag from "./Tag";
import PlatformLogo from "./PlatformLogo";
import Level from "./Level";
import { capitalizeFirstLetter } from "../../../utils/utils";
import { endpoints } from "../../../constants/endpoints";
import { DataContext } from "../../../context/DataProvider";
import axios from "axios";
import Tick from "../../icons/Tick";

const TableRow = ({ problem }) => {
  const { account, setAccount } = useContext(DataContext);
  const {
    id,
    problem_desc,
    problem_url,
    problem_tags,
    platform,
    problem_level,
  } = problem;
  const [isCompleted, setIsCompleted] = useState(
    account.problems_completed.indexOf(id)
  );
  const problemTagsArray = problem_tags.map((tag) =>
    capitalizeFirstLetter(tag)
  );

  const updateStatus = async () => {
    axios({
      method: "PUT",
      url: endpoints.markCompleted,
      data: {
        user_id: account.id,
        problem_id: id,
      },
    }).then((response) => {
      console.log("Status Updated Successfully: ", response);
      setAccount(response.data.user);
    });
  };

  useEffect(() => {
    setIsCompleted(account.problems_completed.indexOf(id));
  }, [account]);

  return (
    <Box
      sx={{
        borderBottom: "2px solid rgba(221, 228, 252, 1)",
        paddingX: 2,
        paddingY: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PlatformLogo platform={platform} />
          <Typography
            sx={{
              color: "black",
              fontFamily: "Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              lineHeight: "32.0px",
              letterSpacing: "0px",
            }}
          >
            {problem_desc}
          </Typography>
        </Box>
        <Box sx={{ mt: "12px", display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              color: "rgba(71, 100, 234, 1)",
              fontFamily: "Roboto, sans-serif",
              fontSize: "16px",
              fontWeight: "100",
              lineHeight: "34.0px",
              letterSpacing: "0px",
              mr: 2,
              "&:hover": {
                background: "#F5F7FF",
                borderRadius: "4px",
                cursor: "pointer",
              },
              display: "flex",
              alignItems: "center",
              paddingX: 2,
              paddingY: 1.2,
            }}
            onClick={updateStatus}
          >
            {isCompleted === -1 ? (
              "Mark as Completed"
            ) : (
              <>
                <Tick width="20px" height="20px" /> Completed
              </>
            )}
          </Typography>
          <Button
            component="a"
            href={problem_url}
            target="_blank"
            sx={{
              paddingX: 2,
              paddingY: 1.5,
              background: "rgba(65, 93, 221, 1)",
              "&:hover": {
                background: "#1E3DCE",
              },
              color: "#fff",
              fontFamily: "Roboto, sans-serif",
              fontSize: "16px",
              fontWeight: "300",
              borderRadius: "4px",
            }}
          >
            Solve Problem
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Level level={problem_level} />
        {problemTagsArray &&
          problemTagsArray.map((tag, index) => <Tag key={index} tag={tag} />)}
      </Box>
    </Box>
  );
};

export default TableRow;
