import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      bgImage="url('/images/home-bg.svg')"
      bgSize="cover"
      bgPosition="center"
      borderRadius="md"
      py={{ base: 20, md: 32 }}
      px={{ base: 6, md: 12 }}
      textAlign="center"
    >
      <Heading as="h1" size="2xl" color="teal.700" mb={4}>
        EmoVibe
      </Heading>
      <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700" mb={6}>
        AI & Human emotional support, weekly membership $99.
      </Text>
      <HStack spacing={4} justify="center" wrap="wrap">
        <Link href="/customize" legacyBehavior>
          <Button colorScheme="teal" size="lg" mb={{ base: 2, md: 0 }}>Create AI Role</Button>
        </Link>
        <Link href="/chat" legacyBehavior>
          <Button variant="outline" colorScheme="teal" size="lg">Enter Chat</Button>
        </Link>
      </HStack>
    </Box>
  );
}