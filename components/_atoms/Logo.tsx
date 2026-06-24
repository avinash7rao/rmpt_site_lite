import Link from "next/link";
import Typography from "@mui/material/Typography";

interface LogoProps {
  className?: string;
  fontSize?: string;
  off?: boolean;
}

export function Logo({ className, fontSize, off }: LogoProps) {
  return (
    <Link href='/' className='px-2' style={{ textDecoration: "none" }}>
      <Typography
        component='h2'
        className={className}
        sx={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: "bold",
          letterSpacing: "0.1em",
          display: "flex",
          alignItems: "center",
        }}>
        <Typography
          component='span'
          sx={{
            fontSize: fontSize ? { fontSize } : "2em",
            color: "#ff0000",
            fontStyle: "italic",
            display: "inline-block",
            transform: "skewX(6deg)",
            filter: `
              drop-shadow(0 0 0px #ff4d4d)
              drop-shadow(0 0 8px #ff0000)
              drop-shadow(0 0 12px #cc0000)
              drop-shadow(0 0 16px rgba(255,0,0,0.6))
            `,
          }}>
          R
        </Typography>
        <Typography
          component='span'
          sx={{
            fontSize: fontSize ? { fontSize } : "2em",
            color: "#ffffff",
            filter: `
              drop-shadow(0 0 0px #ffffff)
              drop-shadow(0 0 ${off ? "2px" : "8px"} #e6e6e6)
              drop-shadow(0 0 ${off ? "4px" : "12px"} #cccccc)
              drop-shadow(0 0 ${off ? "6px" : "16px"} rgba(255,255,255,0.5))
            `,
          }}>
          MPT
        </Typography>
      </Typography>
    </Link>
  );
}