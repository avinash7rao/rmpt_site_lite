import { Box, Typography } from "@mui/material";
import { PageSection } from "../_sections/PageSection";
import { Logo } from "../_atoms/Logo";

export default function Hero() {
  return (
    <PageSection>
      <Logo fontSize='5em' off={true} />
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <Typography sx={{fontSize: '1em'}}>
          Welcome to the RMPT LLC!
        </Typography>
        <Typography >
          A place where you can express your creativity and explore the world of
          technology. Our mission is to foster a community of like-minded
          individuals who are passionate about making a difference.
        </Typography>
      </Box>
    </PageSection>
  );
}
