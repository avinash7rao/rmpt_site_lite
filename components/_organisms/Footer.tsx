import { Box, Typography } from "@mui/material";
import { CopyRight } from "../_atoms/Icons/CopyRight";

interface FooterProps {
  footer?: {
    items?: {
      field_company_name?: string;
      field_year?: string;
    };
  };
}

export function Footer({ footer }: FooterProps) {
  return (
    <Box
      component='footer'
      sx={{
        mb: "auto",
        py: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.5,
      }}>
      <CopyRight />
      <Typography
        variant='body2'
        sx={{
          color: "common.white",
        }}>
        {footer?.items?.field_company_name} {footer?.items?.field_year}
      </Typography>
    </Box>
  );
}
