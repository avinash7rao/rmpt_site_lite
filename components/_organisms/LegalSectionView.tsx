import React from "react";
import { Box, Typography } from "@mui/material";
import { ContentBlockView, ContentBlock } from "../_molecules/ContentBlockView";

export interface LegalSection {
  id: number;
  title: string;
  blocks: ContentBlock[];
}
interface Props {
  section: LegalSection;
}

export const LegalSectionView: React.FC<Props> = ({ section }) => {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        variant='h5'
        component='h5'
        sx={{ fontWeight: 600 }}
        gutterBottom>
        {section.id}. {section.title}
      </Typography>
      <Box>
        {section.blocks.map((block, idx) => (
          <ContentBlockView key={idx} block={block} />
        ))}
      </Box>
      <hr />
    </Box>
  );
};