import { Box } from "@mui/material";
import Hero from "@/components/_pageContent/Hero";
import WhoIs from "@/components/_pageContent/whoIs";

export default function Home() {
  return (
    <Box component='main'>
      <Hero />
      <WhoIs />
    </Box>
  );
}
