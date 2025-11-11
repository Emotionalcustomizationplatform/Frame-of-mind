// src/app/treehole/page.tsx
"use client";
import { Box, Heading, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function TreeHolePage() {
  const [v, setV] = useState("");
  return (
    <Box p={6}>
      <Heading mb={4}>Tree Hole</Heading>
      <Textarea value={v} onChange={(e)=>setV(e.target.value)} placeholder="Write anonymously..." mb={3} />
      <Button onClick={()=>{ alert("Saved (demo)"); setV(""); }}>Submit</Button>
    </Box>
  );
}