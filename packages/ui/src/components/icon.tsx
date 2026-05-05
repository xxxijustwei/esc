import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";
import { forwardRef } from "react";

const DEFAULT_ICON_STROKE_WIDTH = 2;

type IconProps = HugeiconsIconProps;

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ strokeWidth = DEFAULT_ICON_STROKE_WIDTH, ...props }, ref) => {
    return <HugeiconsIcon ref={ref} strokeWidth={strokeWidth} {...props} />;
  },
);

Icon.displayName = "Icon";

export { DEFAULT_ICON_STROKE_WIDTH, Icon };
export type { IconProps };
