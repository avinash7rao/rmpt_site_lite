import { Button } from "@mui/material";
import Link from "next/link";

interface NavMenuButtonProps {
  href: string;
  label: string;
  black?: boolean;
  onClick?: () => void;
}

export default function NavMenuButton({
  href,
  label,
  black,
  onClick,
}: NavMenuButtonProps) {
  return (
    <Button
      onClick={onClick}
      component={href ? (href.startsWith("mailto:") ? "a" : Link) : "button"}
      href={href}
      variant='text'
      sx={{
        display: "flex",
        color: "inherit",
        textTransform: "none",
        border: "2px solid transparent",
        borderRadius: 2,
        px: 2,
        py: 1,
        fontSize: "1rem",
        bgcolor: black ? "#000" : "transparent",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: black ? "white" : "#f44336",
          color: black ? "#f44336" : "#000000",
        },
      }}>
      {label}
    </Button>
  );
}
