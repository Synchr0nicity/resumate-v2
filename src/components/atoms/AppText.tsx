import { Text as ChakraText } from "@chakra-ui/react";
import React from "react";

/**
 * 1. Define variants ONCE
 */
const variants = {
  body: {
    fontSize: "16px",
    lineHeight: "28px",
    color: "#64748B",
  },
  small: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#64748B",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    color: "#64748B",
  },
  hero: {
    fontSize: "18px",
    lineHeight: "29.25px",
    color: "#64748B",
  },
} as const;

/**
 * 2. Derive type from variants
 */
type AppTextVariant = keyof typeof variants;

/**
 * 3. Props
 */
type AppTextProps = React.ComponentProps<typeof ChakraText> & {
  variant?: AppTextVariant;
  children: React.ReactNode;
  color?: string;
};

export function AppText({
  children,
  variant = "body",
  color,
  ...props
}: AppTextProps) {
  const styles = variants[variant];

  return (
    <ChakraText {...styles} color={color ?? styles.color} {...props}>
      {children}
    </ChakraText>
  );
}
