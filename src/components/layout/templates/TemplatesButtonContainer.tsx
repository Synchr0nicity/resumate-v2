"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";

const TemplatesButtonContainer = () => {
  const [activeBtn, setActiveBtn] = useState<"all" | "creative" | "corporate">(
    "all",
  );

  return (
    <ButtonGroup
      p="4px"
      bg="#F4F6F8"
      borderRadius="8px"
      border="1px solid #E2E8F0"
    >
      <Button
        bg={activeBtn === "all" ? "#fff" : "transparent"}
        color={activeBtn === "all" ? "black" : "#64748B"}
        // w="48.5px"
        p="8px 16px"
        fontSize="14px"
        fontWeight="600"
        lineHeight="20px"
        borderRadius="6px"
        onClick={() => setActiveBtn("all")}
      >
        All
      </Button>
      <Button
        bg={activeBtn === "creative" ? "#fff" : "transparent"}
        color={activeBtn === "creative" ? "black" : "#64748B"}
        // w="48.5px"
        p="8px 16px"
        fontSize="14px"
        fontWeight="600"
        lineHeight="20px"
        borderRadius="6px"
        onClick={() => setActiveBtn("creative")}
      >
        Creative
      </Button>
      <Button
        bg={activeBtn === "corporate" ? "#fff" : "transparent"}
        color={activeBtn === "corporate" ? "black" : "#64748B"}
        // w="48.5px"
        p="8px 16px"
        fontSize="14px"
        fontWeight="600"
        lineHeight="20px"
        borderRadius="6px"
        onClick={() => setActiveBtn("corporate")}
      >
        Corporate
      </Button>
    </ButtonGroup>
  );
};

export default TemplatesButtonContainer;
