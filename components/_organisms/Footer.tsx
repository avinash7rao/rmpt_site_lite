import { Box, Typography } from "@mui/material";
import { CopyRight } from "../_atoms/Icons/CopyRight";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
interface FooterData {
  items: {
    field_company_name: string;
    field_year: number;
    youtube_link: string;
    patreon_link: string;
    ko_fi_link: string;
  };
}
interface FooterProps {
  footer: FooterData;
}

export function Footer({ footer }: FooterProps) {
  return (
    <Box component='footer' sx={{ py: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}>
        <IconButton
          href={footer?.items?.patreon_link}
          target='_blank'
          rel='noopener noreferrer'>
          <Image
            src='/images/patreon.png'
            alt='Patreon'
            width={40}
            height={40}
          />
        </IconButton>
        <IconButton
          href={footer?.items?.youtube_link}
          target='_blank'
          rel='noopener noreferrer'>
          <YouTubeIcon sx={{ color: "common.white", fontSize: 40 }} />
        </IconButton>
        <IconButton
          href={footer?.items?.ko_fi_link}
          target='_blank'
          rel='noopener noreferrer'>
          <Image src='/images/ko-fi.png' alt='Ko-fi' width={40} height={40} />
        </IconButton>
      </Box>
      <Box
        sx={{
          mb: "auto",
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
    </Box>
  );
}
