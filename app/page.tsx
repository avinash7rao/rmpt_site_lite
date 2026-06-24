import { Box } from "@mui/material";
import Hero from "@/components/_pageContent/Hero";
import WhoIs from "@/components/_pageContent/whoIs";
import Donation from "@/components/_pageContent/Donation";

export default function Home() {
  return (
    <Box>
      <Hero />
      <WhoIs />
      <Donation />
    </Box>
  );
}
