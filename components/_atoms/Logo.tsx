import Link from "next/link";
import Typography from "@mui/material/Typography";

export function Logo({ className }: { className?: string }) {
  return (
    <Link className='px-2' href='/' style={{ textDecoration: "none" }}>
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
            fontSize: "2em",
            color: "#ff0000",
            fontStyle: "italic",
            display: "inline-block",
            transform: "skewX(6deg)",
            filter: `
              drop-shadow(0 0 1px #ff4d4d)
              drop-shadow(0 0 14px #ff0000)
              drop-shadow(0 0 28px #cc0000)
              drop-shadow(0 0 40px rgba(255,0,0,0.6))
            `,
          }}>
          R
        </Typography>
        <Typography
          component='span'
          sx={{
            fontSize: "2em",
            color: "#ffffff",
            filter: `
              drop-shadow(0 0 1px #ffffff)
              drop-shadow(0 0 14px #e6e6e6)
              drop-shadow(0 0 28px #cccccc)
              drop-shadow(0 0 40px rgba(255,255,255,0.5))
            `,
          }}>
          MPT
        </Typography>
      </Typography>
    </Link>
  );
}
