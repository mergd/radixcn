"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <Container size="2">
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="5"
        style={{ minHeight: "calc(100vh - 200px)" }}
      >
        <Heading size="8" align="center">
          404
        </Heading>
        <Heading size="4" align="center" color="gray">
          This page could not be found
        </Heading>

        <Text size="2" align="center" color="gray">
          The page you're looking for doesn't exist or has been moved.
        </Text>

        <Link
          size="2"
          onClick={() => router.back()}
          style={{ cursor: "pointer" }}
        >
          <Flex align="center" gap="1">
            <ArrowLeftIcon />
            Go back
          </Flex>
        </Link>
      </Flex>
    </Container>
  );
}
