
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface DotPatternProps extends React.HTMLAttributes<SVGElement> {
  width?: number | string;
  height?: number | string;
  x?: number | string;
  y?: number | string;
  cx?: number | string;
  cy?: number | string;
  cr?: number | string;
  glow?: boolean;
}

export const DotPattern = React.forwardRef<SVGSVGElement, DotPatternProps>(
  (
    {
      width = 16,
      height = 16,
      x = 0,
      y = 0,
      cx = 1,
      cy = 1,
      cr = 1,
      glow = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("absolute inset-0 -z-10", className)}
        {...props}
      >
        <defs>
          <pattern
            id="dot-pattern"
            x={x}
            y={y}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={cx} cy={cy} r={cr} className="text-cyber-accent" fill="currentColor" />
          </pattern>
          {glow && (
            <filter id="glow">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="4"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="0 0 0 0 0.6 0 0 0 0 0.8 0 0 0 0 1 0 0 0 1 0"
                result="coloredBlur"
              />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#dot-pattern)"
          filter={glow ? "url(#glow)" : undefined}
        />
      </svg>
    );
  }
);

DotPattern.displayName = "DotPattern";
