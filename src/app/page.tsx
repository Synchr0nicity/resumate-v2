import { Flex, Link, Text, Button, ButtonGroup, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Hero from "../components/layout/Hero";
import Benefits from "../components/layout/Benefits";
import HowWeWork from "@/components/layout/HowWeWork";
import SuccessStories from "@/components/layout/SuccessStories";
import CTA from "@/components/layout/CTA";
import Templates from "@/components/layout/templates/Templates";

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
      <Benefits />
      <Templates />
      <HowWeWork />
      <SuccessStories />
      <CTA />
    </Flex>
  );
}
