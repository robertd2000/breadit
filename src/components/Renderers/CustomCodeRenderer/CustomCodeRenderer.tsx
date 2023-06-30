import React, { FC } from "react";
import { CustomCodeRendererProps } from "./CustomCodeRenderer.interface";

const CustomCodeRenderer: FC<CustomCodeRendererProps> = ({ data }) => {
  return (
    <pre className="bg-gray-800 rounded-md p-4">
      <code className="text-gray-100 text-sm">{data.code}</code>
    </pre>
  );
};

export default CustomCodeRenderer;
