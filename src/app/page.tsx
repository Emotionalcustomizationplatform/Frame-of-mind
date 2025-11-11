"use client";

import { Box, Button, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box bg="background" minH="100vh" fontFamily="Poppins">
      {/* ====== Navbar ====== */}
      <HStack
        justify="space-between"
        px={10}
        py={5}
        bg="white"
        boxShadow="sm"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Heading size="md" color="primary">
          Emovibe
        </Heading>

        <HStack spacing={8} fontWeight="500">
          <Link href="/chat">Chat</Link>
          <Link href="/treehole">Tree Hole</Link>
          <Link href="/therapy">Therapy</Link>
          <Link href="/ai-custom">AI Companion</Link>
        </HStack>

        <Button colorScheme="blue" as={Link} href="/login">
          Login / Sign Up
        </Button>
      </HStack>

      {/* ====== Hero Section ====== */}
      <Box
        bgGradient="linear(to-r, blue.100, pink.50)"
        py={{ base: 20, md: 32 }}
        textAlign="center"
      >
        <VStack spacing={6}>
          <Heading size="2xl" color="gray.800" maxW="700px">
            Feel heard. Feel understood.  
            <br />
            Your emotional world deserves care.
          </Heading>
          <Text color="gray.600" maxW="500px" fontSize="lg">
            Connect with real companions or AI listeners trained to comfort, chat, and understand you.
          </Text>

          <HStack spacing={4}>
            <Button colorScheme="blue" size="lg" as={Link} href="/ai-custom">
              Try AI Chat
            </Button>
            <Button variant="outline" size="lg" as={Link} href="/pricing">
              Membership $99 / week
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* ====== Feature Section ====== */}
      <Box py={20} bg="white">
        <Heading textAlign="center" mb={12} color="gray.800">
          What You Can Do on Emovibe
        </Heading>

        <HStack
          justify="center"
          spacing={10}
          wrap="wrap"
          px={{ base: 4, md: 20 }}
        >
          <FeatureCard
            title="AI Custom Companion"
            text="Create your own emotional AI character: choose personality, gender, and chat style."
            img="ai-chat.jpg"
          />
          <FeatureCard
            title="Real Human Listeners"
            text="Talk with verified companions who provide real empathy and comfort."
            img="real-human.jpg"
          />
          <FeatureCard
            title="Tree Hole"
            text="Write your thoughts anonymously. Let your emotions find a safe home."
            img="tree-hole.jpg"
          />
          <FeatureCard
            title="Therapy Support"
            text="Get matched with licensed mentors who help you explore your feelings."
            img="therapy.jpg"
          />
        </HStack>
      </Box>

      {/* ====== Membership Section ====== */}
      <Box py={20} bg="blue.50" textAlign="center">
        <Heading mb={4}>Weekly Membership</Heading>
        <Text fontSize="lg" color="gray.600">
          $99 / week – includes unlimited AI chat + 3 human chat sessions
        </Text>
        <Button mt={6} colorScheme="blue" size="lg" as={Link} href="/payment">
          Join Now
        </Button>
        <Text mt={4} fontSize="sm" color="gray.500">
          Payments supported via PayPal and WeChat
        </Text>
      </Box>

      {/* ====== Footer ====== */}
      <Box as="footer" bg="gray.50" py={10} textAlign="center">
        <Text color="gray.500">
          © 2025 Emovibe. All rights reserved. | Emotional Connection Platform
        </Text>
      </Box>
    </Box>
  );
}

/* ====== Reusable Feature Card Component ====== */
function FeatureCard({ title, text, img }: { title: string; text: string; img: string }) {
  return (
    <VStack
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      p={6}
      maxW="260px"
      spacing={4}
      textAlign="center"
    >
      <Image
        src={`/images/${img}`}
        alt={title}
        borderRadius="md"
        objectFit="cover"
        height="160px"
        width="100%"
      />
      <Heading size="md">{title}</Heading>
      <Text color="gray.600" fontSize="sm">
        {text}
      </Text>
    </VStack>
  );
}