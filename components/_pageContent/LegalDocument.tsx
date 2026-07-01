import React from "react";
import { Box } from "@mui/material";
import { LegalSectionView, LegalSection } from "../_organisms/LegalSectionView";

interface LegalDocumentProps {
  sections: LegalSection[];
}

export const LegalDocument: React.FC<LegalDocumentProps> = ({ sections }) => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        px: 3,
        py: 4,
      }}
    >
      {sections.map((section) => (
        <LegalSectionView key={section.id} section={section} />
      ))}
    </Box>
  );
};