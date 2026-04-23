import { Flex, Link, Text, Button, ButtonGroup } from "@chakra-ui/react";
import NextLink from "next/link";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Flex pt="80px" minH="100vh" className="landing-page-container">
      <Hero />
    </Flex>
  );
}
