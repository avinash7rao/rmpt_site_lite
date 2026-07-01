import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

export interface ContentBlock {
  type: "paragraph" | "list";
  content: string | string[];
}

export const ContentBlockView: React.FC<{ block: ContentBlock }> = ({
  block,
}) => {
  switch (block.type) {
    case "paragraph":
      return (
        <Typography
          variant="body1"
          sx={{ mb: 1.5, color: "text.primary", lineHeight: 1.7 }}
        >
          {block.content}
        </Typography>
      );

    case "list":
      return (
        <List dense sx={{ pl: 2, mb: 2 }}>
          {(block.content as string[]).map((item, i) => (
            <ListItem key={i} disableGutters sx={{ py: 0.2 }}>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    • {item}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      );

    default:
      return null;
  }
};