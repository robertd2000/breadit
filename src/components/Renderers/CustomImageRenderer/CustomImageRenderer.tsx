"use client";

import React, { FC } from "react";
import Image from "next/image";
import { CustomImageRendererProps } from "./CustomImageRenderer.interface";

const CustomImageRenderer: FC<CustomImageRendererProps> = ({ data }) => {
  const src = data.file.url;

  return (
    <div className="relative w-full min-h-[15rem]">
      <Image alt="image" className="object-contain" fill src={src} />
    </div>
  );
};

export default CustomImageRenderer;
