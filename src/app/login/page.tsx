"use client";

import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import { Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SourceTextModule } from "vm";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Flex h="100vh" w="100vw" className="login-page-container">
      {mode === "login" ? (
        <LoginForm setMode={setMode} />
      ) : (
        <SignupForm setMode={setMode} />
      )}
      <Flex flex={1} backgroundImage={"src()"} />
    </Flex>
  );
}
