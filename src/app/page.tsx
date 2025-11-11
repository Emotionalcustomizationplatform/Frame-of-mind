// src/app/page.tsx
"use client";
import Link from "next/link";
import { Box, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box minH="100vh" p={6}>
      <HStack justify="space-between" mb={6}>
        <Heading size="md">EmoVibe</Heading>
        <HStack spacing={4}>
          <Link href="/chat">Chat</Link>
          <Link href="/treehole">Tree Hole</Link>
          <Link href="/payment">Payment</Link>
        </HStack>
      </HStack>

      <VStack spacing={6} align="start">
        <Heading>Welcome to EmoVibe</Heading>
        <Text>AI & Human emotional support demo site.</Text>
        <HStack spacing={4}>
          <Button as={Link} href="/chat" colorScheme="teal">Go to Chat</Button>
          <Button as={Link} href="/payment" variant="outline">Purchase Membership</Button>
        </HStack>
        <Text color="gray.500" mt={6}>API health check: <a href="/api/health">/api/health</a></Text>
      </VStack>
    </Box>
  );
}