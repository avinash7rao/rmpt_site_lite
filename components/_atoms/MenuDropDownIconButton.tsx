import { IconButton } from "@mui/material";
import { ReactNode } from "react";

interface IconButtonProps {
  open?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export default function MenuDropDownIconButton({
  open = false,
  onClick,
  children,
}: IconButtonProps) {
  return (
    <IconButton
      size="small"
      onClick={onClick}
      sx={{
        color: "white",
        transition: "transform 0.2s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      {children}
    </IconButton>
  );
}