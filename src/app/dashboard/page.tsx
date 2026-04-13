"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import {
  Education,
  Experience,
  PersonalDetails,
  Resume,
} from "@/generated/prisma/client";
import { useEffect, useState } from "react";

type ResumeEntity = Resume & {
  workHistory: Experience[];
  education: Education[];
  personalDetails: PersonalDetails | null;
};

export default function Dashboard() {
  const { data: session, status } = useSession();

  const [confirmDelete, setConfirmDelete] = useState<{ id: string }>({
    id: "",
  });

  const [resumes, setResumes] = useState<ResumeEntity[]>();

  const handleGetResumes = async () => {
    const res = await fetch(`/api/resumes`, {});
    const data = await res.json();
    setResumes(data);
    console.log(data);
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    if (resumes?.length) {
      return;
    }
    handleGetResumes();
  }, []);

  const handleDeleteResume = async (id: string) => {
    const res = await fetch(`/api/resumes/${id}`, { method: "DELETE" });
    const data = await res.json();
    console.log(data);
    handleGetResumes();
  };

  const handleCancelDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setConfirmDelete({ id: "" });
  };
  const handleConfirmDelete = (id: string) => {
    handleDeleteResume(id);
    setConfirmDelete({ id: "" });
  };

  if (status === "loading")
    return (
      <Flex width="100vw" justifyContent="center">
        ...Loading your dashboard!
      </Flex>
    );
  if (!session)
    return (
      <Flex width="100vw" justifyContent="center" gap="12px">
        <Text>Please log in</Text>
        <Button
          onClick={() =>
            signIn("google", {
              prompt: "select_account",
              callbackUrl: "/dashboard",
            })
          }
        >
          Sign in with Google
        </Button>
      </Flex>
    );

  return (
    <Flex
      width="100vw"
      justifyContent="center"
      p="20px"
      className="dashboard-container"
      flexDir="column"
    >
      <Flex justifyContent="space-between" ml="calc(50vw - 208px)">
        <Heading>Welcome to {session.user?.name}'s Dashboard!</Heading>
        <IconButton
          justifySelf="flex-end"
          borderRadius="20px"
          border="1px solid"
          borderColor="black"
          bg="transparent"
          color="purple"
          className="fa-solid fa-user"
          onClick={() =>
            signOut({
              callbackUrl: "/login",
            })
          }
        />
      </Flex>

      <Flex
        className="dashboard-resume-list-container"
        px="20px"
        mt="150px"
        width="100%"
        flexDir="column"
        gap="40px"
      >
        <Flex
          gap="4px"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            as={Flex}
            gap="4px"
            bg="#010af7"
            alignItems="center"
            _hover={{ bg: "#0309ae" }}
          >
            <Text mb="0">Start creating your next resume</Text>
            <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </Flex>
        <Heading textAlign={"center"}>CURRENT RESUMES</Heading>
        <Flex gap="10px" width="100%" justifyContent="center">
          {resumes?.map((resume) => {
            return (
              <Flex
                key={resume.id}
                bg="#dad6d6"
                borderRadius="8px"
                height="200px"
                width="150px"
                cursor="pointer"
                onClick={() => console.log("resume card clicked")}
                p="20px"
                flexDir="column"
              >
                {confirmDelete.id === resume.id ? (
                  <Flex alignSelf="flex-end" gap="8px">
                    <Flex
                      color=" #51921c"
                      _hover={{ color: "#60c30f" }}
                      _active={{ color: "#7cf916" }}
                      _focus={{ color: "#7cf916" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleConfirmDelete(resume.id);
                        // handleDeleteResume(resume.id);
                        // console.log("trash clicked");
                      }}
                    >
                      <i
                        className="fa-solid fa-check"
                        style={{ color: "inherit" }}
                      ></i>
                    </Flex>
                    <Flex
                      alignSelf="flex-end"
                      color="#991B1B"
                      _hover={{ color: "#DC2626" }}
                      _active={{ color: "#7F1D1D" }}
                      _focus={{ color: "#7F1D1D" }}
                      onClick={handleCancelDelete}
                    >
                      <i
                        className="fa-solid fa-xmark"
                        style={{ color: "inherit" }}
                      ></i>
                    </Flex>
                  </Flex>
                ) : (
                  <Flex
                    gap="4px"
                    alignSelf="flex-end"
                    color="#991B1B"
                    _hover={{ color: "#DC2626" }}
                    _active={{ color: "#7F1D1D" }}
                    _focus={{ color: "#7F1D1D" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setConfirmDelete({ id: resume.id });
                      // handleDeleteResume(resume.id);
                      // console.log("trash clicked");
                    }}
                  >
                    <i
                      className="fa-regular fa-trash-can"
                      style={{ color: "inherit" }}
                    ></i>
                  </Flex>
                )}
                <Heading
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow={"ellipsis"}
                >
                  {resume.title}
                </Heading>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
