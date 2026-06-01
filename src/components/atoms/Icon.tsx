import { Box, BoxProps } from "@chakra-ui/react";

type IconProps = BoxProps & {
  className?: string;
};

export function Icon({ className, ...props }: IconProps) {
  return (
    <Box
      as="i"
      className={className}
      cursor="pointer"
      transition="color 0.2s"
      {...props}
    />
  );
}
