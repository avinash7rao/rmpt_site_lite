import { Button } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface DefaultButtonProps {
  href?: string;
  label: string;
  onClick?: () => void;
  children?: ReactNode;
}

export default function DefaultButton({
  href,
  label,
  onClick,
  children,
}: DefaultButtonProps) {
  return (
    <Button
      component={href ? (href.startsWith("mailto:") ? "a" : Link) : "button"}
      href={href}
      onClick={onClick}
      fullWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textTransform: "none",
        border: "2px solid transparent",
        borderRadius: 2,
        px: 2,
        py: 1,
        mr: 1,
        fontSize: "1rem",
        bgcolor: "#000",
        color: "white",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: "#f44336",
        },
      }}>
      <span>{label}</span>
      {children}
    </Button>
  );
}
