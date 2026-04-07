"use client";

import {
  Education,
  Job,
  PersonalDetails,
  Resume,
} from "@/generated/prisma/client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

type ResumeEntity = Resume & {
  workHistory: Job[];
  education: Education[];
  personalDetails: PersonalDetails | null;
};

export default function TestPage() {
  const [resumes, setResumes] = useState<ResumeEntity[]>();
  const resumeDeleted = useRef<boolean>(false);
  const resumeCreated = useRef<boolean>(false);

  const createResume = async () => {
    const res = await fetch("/api/resumes", {
      method: "POST",
      body: JSON.stringify({
        title: "Software Engineer Resume",
        content: { text: "Stuff here" },
      }),
    });

    const data = await res.json();
    console.log(data);
    alert(JSON.stringify(data));
    handleGetResumes();
  };

  const handleUpdateResume = async (id: string) => {
    try {
      const res = await fetch(`/api/resumes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workHistory: { title: "Software Engineer Resume" },
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Resume");
      }

      const data = await res.json();

      setResumes((prev) => {
        if (!prev) return prev;
        return prev?.map((resume) => (resume.id === data.id ? data : resume));
      });
      console.log(data);
      alert(JSON.stringify(data));
      handleGetResumes();
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetResume = async (id: string) => {
    const res = await fetch(`/api/resumes/${id}`, {});
    const data = await res.json();

    setResumes((prev) => {
      if (!prev) return prev;

      return prev.map((resume) => (resume.id === data.id ? data : resume));
    });
    console.log(data);
    alert(JSON.stringify(data));
  };

  const handleDeleteResume = async (id: string) => {
    const res = await fetch(`/api/resumes/${id}`, { method: "DELETE" });
    const data = await res.json();
    console.log(data);
    alert(JSON.stringify(data));
    handleGetResumes();
  };

  const handleGetResumes = async () => {
    const res = await fetch(`/api/resumes`, {});
    const data = await res.json();
    setResumes(data);
    console.log(data);
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    if (resumes?.length && (!resumeDeleted.current || !resumeCreated.current)) {
      return;
    }

    handleGetResumes();
  }, []);

  if (!resumes) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Test API</h1>
      <Flex flexDir="column" gap="4px">
        {resumes &&
          resumes.map((resume) => {
            return (
              <Flex key={resume.id} flexDir="column" gap="2px">
                <Text>Resume Id: {resume.id}</Text>
                {resume.workHistory && resume.workHistory.length && (
                  <Flex>{resume.workHistory[0].title} </Flex>
                )}
                <Flex gap="2px">
                  <Button
                    onClick={() => handleDeleteResume(resume.id)}
                    size="xs"
                  >
                    Delete Resume
                  </Button>
                  <Button onClick={() => handleGetResume(resume.id)} size="xs">
                    Get Resume
                  </Button>
                  <Button
                    onClick={() => handleUpdateResume(resume.id)}
                    size="xs"
                  >
                    Update Resume
                  </Button>
                </Flex>
              </Flex>
            );
          })}
      </Flex>
      <Box height="2px" width="100%" my="8px" bg="red" />
      <Button onClick={createResume} size="xs">
        Create Resume
      </Button>
    </div>
  );
}
