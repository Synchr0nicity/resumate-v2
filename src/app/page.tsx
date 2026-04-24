import { Flex, Link, Text, Button, ButtonGroup, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Hero from "../components/layout/Hero";
import WhyUs from "../components/layout/WhyUs";
import HowWeWork from "@/components/layout/HowWeWork";

export default function Home() {
  return (
    <Flex
      position="relative"
      pt="80px"
      minH="100vh"
      className="landing-page-container"
      flexDir="column"
      width="100vw"
    >
      <Hero />
      <WhyUs />
      <HowWeWork />
    </Flex>
  );
}
