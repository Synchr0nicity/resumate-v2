"use client";

import { Button } from "@chakra-ui/react";

export default function TestPage() {
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
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Test API</h1>
      <Button onClick={createResume}>Create Resume</Button>
    </div>
  );
}
