"use client";
import { useState } from "react";
import { VStack, Box, HStack, Select, Text, Button } from "@chakra-ui/react";
import ResponsiveContainer from "@/components/ui/ResponsiveContainer";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

// 注意：Stripe / PayPal / 微信支付需在后端生成 session 或 payment intent
export default function PaymentPage() {
  const [service, setService] = useState<"ai"|"human">("ai");
  const [method, setMethod] = useState<"stripe"|"paypal"|"wechat">("stripe");

  const handlePayment = async () => {
    if (method === "stripe") {
      // 调用后端 Stripe Session API
      alert(`Redirecting to Stripe checkout for ${service.toUpperCase()} service`);
    } else if (method === "paypal") {
      // 调用后端 PayPal Checkout
      alert(`Redirecting to PayPal for ${service.toUpperCase()} service`);
    } else if (method === "wechat") {
      // 调用后端微信支付接口，生成二维码
      alert(`Please scan the WeChat QR code to pay for ${service.toUpperCase()} service`);
    }
  };

  return (
    <ResponsiveContainer>
      <Box bg="gray.50" borderRadius="md" p={8} maxW="600px" mx="auto" mt={12}>
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="600" color="teal.700">Choose Your Service</Text>
          <Select value={service} onChange={e => setService(e.target.value as any)}>
            <option value="ai">AI Companion</option>
            <option value="human">Human Supporter</option>
          </Select>

          <Text fontSize="2xl" fontWeight="600" color="teal.700">Select Payment Method</Text>
          <Select value={method} onChange={e => setMethod(e.target.value as any)}>
            <option value="stripe">Credit Card / Apple Pay / Google Pay (Stripe)</option>
            <option value="paypal">PayPal</option>
            <option value="wechat">WeChat Pay</option>
          </Select>

          <Text color="gray.600">Weekly Membership Fee: <b>$99</b></Text>

          <HStack justify="flex-end">
            <ButtonPrimary onClick={handlePayment}>Pay Now</ButtonPrimary>
          </HStack>
        </VStack>
      </Box>
    </ResponsiveContainer>
  );
}
