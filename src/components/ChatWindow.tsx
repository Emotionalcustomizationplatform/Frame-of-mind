// src/components/ChatWindow.tsx
"use client";
import { Box, Input, Button, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function ChatWindow({ conversationId }: { conversationId?: number }) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const { data } = await axios.post("/api/openai/chat", { conversationId, messages: [...messages, userMsg], roleTemplate: "You are a gentle supportive companion." });
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Error: failed to get response." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box borderWidth={1} borderRadius="md" p={4}>
      <VStack align="stretch" spacing={3} minH="300px">
        {messages.map((m, i) => (
          <Box key={i} alignSelf={m.role === "user" ? "flex-end" : "flex-start"} bg={m.role === "user" ? "teal.50" : "gray.100"} p={3} borderRadius="md">
            <Text>{m.content}</Text>
          </Box>
        ))}
      </VStack>
      <Box mt={4} display="flex" gap={2}>
        <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
        <Button onClick={send} isLoading={loading} colorScheme="teal">Send</Button>
      </Box>
    </Box>
  );
}