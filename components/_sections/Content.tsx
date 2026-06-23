import React from "react";

type ContentProps = {
  html: string;
};

export default function Content({ html }: ContentProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}