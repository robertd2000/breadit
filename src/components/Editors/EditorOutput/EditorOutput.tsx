import React, { FC } from "react";
import dynamic from "next/dynamic";
import { EditorOutputProps } from "./EditorOutput.interface";
import { renderers, style } from "../constants/config";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  {
    ssr: false,
  }
);

const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  return (
    <Output
      style={style}
      className="text-sm"
      renderers={renderers}
      data={content}
    />
  );
};

export default EditorOutput;
