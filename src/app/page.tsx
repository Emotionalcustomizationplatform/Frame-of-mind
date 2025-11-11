"use client";

import { Box, Button, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box minH="100vh">
      {/* Navbar */}
      <HStack justify="space-between" px={10} py={5} bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
        <Heading size="md" color="blue.600">Emovibe</Heading>
        <HStack spacing={8}>
          <Link href="/chat">Chat</Link>
          <Link href="/treehole">Tree Hole</Link>
          <Link href="/therapy">Therapy</Link>
          <Link href="/ai-custom">AI Companion</Link>
        </HStack>
        <Button colorScheme="blue" as={Link} href="/login">Login / Sign Up</Button>
      </HStack>

      {/* Hero */}
      <Box bgGradient="linear(to-r, blue.100, pink.50)" py={32} textAlign="center">
        <VStack spacing={6}>
          <Heading size="2xl" color="gray.800">Feel heard. Feel understood.</Heading>
          <Text color="gray.600" fontSize="lg">
            Connect with real companions or AI listeners trained to comfort, chat, and understand you.
          </Text>
          <HStack spacing={4}>
            <Button colorScheme="blue" size="lg" as={Link} href="/ai-custom">Try AI Chat</Button>
            <Button variant="outline" size="lg" as={Link} href="/payment">Membership $99 / week</Button>
          </HStack>
        </VStack>
      </Box>

      {/* Features */}
      <Box py={20} bg="white">
        <Heading textAlign="center" mb={12} color="gray.800">What You Can Do on Emovibe</Heading>
        <HStack justify="center" spacing={10} wrap="wrap" px={{ base: 4, md: 20 }}>
          <FeatureCard title="AI Custom Companion" text="Create your own emotional AI character." img="ai-chat.jpg"/>
          <FeatureCard title="Real Human Listeners" text="Talk with verified companions." img="real-human.jpg"/>
          <FeatureCard title="Tree Hole" text="Write your thoughts anonymously." img="tree-hole.jpg"/>
          <FeatureCard title="Therapy Support" text="Get matched with licensed mentors." img="therapy.jpg"/>
        </HStack>
      </Box>

      {/* Membership */}
      <Box py={20} bg="blue.50" textAlign="center">
        <Heading mb={4}>Weekly Membership</Heading>
        <Text fontSize="lg" color="gray.600">$99 / week – includes unlimited AI chat + 3 human chat sessions</Text>
        <Button mt={6} colorScheme="blue" size="lg" as={Link} href="/payment">Join Now</Button>
        <Text mt={4} fontSize="sm" color="gray.500">Payments via PayPal and WeChat</Text>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.50" py={10} textAlign="center">
        <Text color="gray.500">© 2025 Emovibe. All rights reserved.</Text>
      </Box>
    </Box>
  );
}

function FeatureCard({ title, text, img }: { title: string; text: string; img: string }) {
  return (
    <VStack bg="white" boxShadow="md" borderRadius="lg" p={6} maxW="260px" spacing={4} textAlign="center">
      <Image src={`/images/${img}`} alt={title} borderRadius="md" objectFit="cover" height="160px" width="100%" />
      <Heading size="md">{title}</Heading>
      <Text color="gray.600" fontSize="sm">{text}</Text>
    </VStack>
  );
}