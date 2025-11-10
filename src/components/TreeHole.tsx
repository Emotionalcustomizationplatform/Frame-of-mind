import { Box, VStack, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function TreeHole() {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    if (!text) return;
    alert("Your secret is safely stored in the tree 🌳");
    setText("");
  };

  return (
    <Box
      bgImage="url('/images/tree-bg.svg')"
      bgSize="cover"
      bgPosition="center"
      borderRadius="md"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12 }}
      minH="400px"
    >
      <VStack spacing={4}>
        <Textarea
          placeholder="Share your secret with the tree..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="lg"
          bg="whiteAlpha.900"
          borderRadius="md"
        />
        <Button colorScheme="teal" size="md" onClick={handleSubmit}>Send</Button>
      </VStack>
    </Box>
  );
}