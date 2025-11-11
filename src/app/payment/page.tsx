// src/app/payment/page.tsx
"use client";
import { Box, Heading, Button, VStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <Box p={6}>
      <Heading mb={4}>Payment Demo</Heading>
      <VStack spacing={4} align="start">
        <Button colorScheme="teal">Pay with Stripe (demo)</Button>
        <Button colorScheme="blue">Pay with PayPal (demo)</Button>
        <Box>
          <Text mb={2}>WeChat pay (scan QR):</Text>
          <Image src="/images/wechat-qr.png" alt="wechat qr" boxSize="200px" />
        </Box>
        <Text color="gray.500">This is a demo payment page.</Text>
      </VStack>
    </Box>
  );
}