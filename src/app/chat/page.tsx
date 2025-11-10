"use client";
import { useState, useRef, useEffect } from "react";
import { VStack, Box, Input, IconButton, HStack, Select } from "@chakra-ui/react";
import ChatBubble from "@/components/ui/ChatBubble";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ResponsiveContainer from "@/components/ui/ResponsiveContainer";
import { FaPaperPlane } from "react-icons/fa";

type Message = { role: "user" | "assistant" | "human"; content: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"ai"|"human">("ai");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, newMsg]);

    // 模拟 AI 或真人回复
    setTimeout(() => {
      const reply: Message = {
        role: mode === "ai" ? "assistant" : "human",
        content: mode === "ai" ? "AI: " + input.split("").reverse().join("") : "Human: Thanks for sharing!"
      };
      setMessages(prev => [...prev, reply]);
    }, 800);

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ResponsiveContainer>
      <Box mb={4}>
        <HStack spacing={4}>
          <Select value={mode} onChange={e => setMode(e.target.value as any)}>
            <option value="ai">AI Companion</option>
            <option value="human">Human Supporter</option>
          </Select>
          <ButtonPrimary onClick={() => alert("Upgrade to membership to unlock full chat!")}>
            Membership $99
          </ButtonPrimary>
        </HStack>
      </Box>

      <Box
        border="1px solid #CBD5E0"
        borderRadius="md"
        p={4}
        height="500px"
        overflowY="auto"
        display="flex"
        flexDirection="column"
      >
        <VStack spacing={3} align="stretch">
          {messages.map((msg, i) => (
            <ChatBubble key={i} role={msg.role} message={msg.content} />
          ))}
        </VStack>
        <div ref={messagesEndRef} />
      </Box>

      <HStack mt={3}>
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <IconButton
          aria-label="Send"
          icon={<FaPaperPlane />}
          colorScheme="teal"
          onClick={sendMessage}
        />
      </HStack>
    </ResponsiveContainer>
  );
}
