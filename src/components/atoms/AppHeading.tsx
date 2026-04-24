import { Heading as ChakraHeading } from "@chakra-ui/react";

type HeadingVariant = "hero" | "section";

type AppHeadingProps = {
  variant?: HeadingVariant;
  as?: any;
  children: React.ReactNode;
} & React.ComponentProps<typeof ChakraHeading>;

export function AppHeading({
  variant = "section",
  as,
  children,
  ...props
}: AppHeadingProps) {
  const styles: Record<HeadingVariant, any> = {
    hero: {
      as: "h1",
      fontSize: "72px",
      lineHeight: "72px",
      fontWeight: "700",
      letterSpacing: "-1.8px",
      textAlign: "center",
    },

    section: {
      as: as || "h2",
      fontSize: "36px",
      lineHeight: "40px",
      fontWeight: "700",
    },
  };

  const style = styles[variant];

  return (
    <ChakraHeading as={style.as} {...style} fontFamily="inherit" {...props}>
      {children}
    </ChakraHeading>
  );
}
