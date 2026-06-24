import { Box, Typography } from "@mui/material";
import { PageSection } from "../_sections/PageSection";

export default function WhoIs() {
  return (
    <PageSection>
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          textAlign: "center",
          p: 4,
        }}>
        <Typography variant='h3' gutterBottom>
          Talent
        </Typography>
        <Typography variant='h5' sx={{ mb: 4 }}>
          Psyber Magus
        </Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
            mb: 2,
          }}>
          Who could this Psyber Magus individual be and what do they want?
        </Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
            mb: 2,
          }}>
          Keep an eye out here and find out soon!
        </Typography>
        <Typography sx={{ fontFamily: "monospace" }}>
          Coming soon to YouTube!
        </Typography>
      </Box>
    </PageSection>
  );
}
