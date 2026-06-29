import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { CopyRight } from "../_atoms/Icons/CopyRight";
import YouTubeIcon from "@mui/icons-material/YouTube";
interface FooterData {
  items: {
    field_company_name: string;
    field_year: number;
    social_media_links: {
      name: string;
      link: string;
      image: string;
      icon: string;
    }[];
  };
}
interface FooterProps {
  footer: FooterData;
}

export function Footer({ footer }: FooterProps) {
  return (
    <Box component='footer' sx={{ py: 2 }}>
      <Typography gutterBottom align='center'>
        Support Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}>
        {footer.items.social_media_links.map((social) => (
          <IconButton
            key={social.name}
            component='a'
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'>
            {social.name === "YouTube" ? (
              <YouTubeIcon sx={{ fontSize: 40, color: "common.white" }} />
            ) : (
              <Image
                src={social.image}
                alt={social.name}
                width={40}
                height={40}
              />
            )}
          </IconButton>
        ))}
      </Box>
      <Box
        sx={{
          mt: 1,
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
          {footer.items.field_company_name} {footer.items.field_year}
        </Typography>
      </Box>
    </Box>
  );
}
