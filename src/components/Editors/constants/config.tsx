import {
  CustomCodeRenderer,
  CustomImageRenderer,
} from "@/components/Renderers";

export const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
};

export const style = {
  paragraph: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
};
