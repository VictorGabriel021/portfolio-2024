import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import React, { ReactNode } from "react";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const CustomizedButtons: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">{children}</ColorButton>
    </Stack>
  );
};

export default CustomizedButtons;
