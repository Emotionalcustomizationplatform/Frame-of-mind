"use client";
import { useState, useEffect } from "react";
import { VStack, Box, HStack, Select, Text } from "@chakra-ui/react";
import ResponsiveContainer from "@/components/ui/ResponsiveContainer";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import { supabase } from "@/lib/supabase";

export default function PaymentPage() {
  const [service, setService] = useState<"ai"|"human">("ai");
  const [method, setMethod] = useState<"stripe"|"paypal"|"wechat">("stripe");
  const user = supabase.auth.user();

  useEffect(() => {
    if (!user) alert("Please login first to make payment!");
  }, [user]);

  const handlePayment = async () => {
    if (!user) return;
    alert(`Simulated ${method} payment for ${service} by ${user.email}`);
    // 调用后端生成支付 session / 微信二维码 / PayPal order
    await fetch('/api/payment/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.id, service_type: service, status: 'completed' })
    });
    alert("Payment completed! You can now chat.");
    window.location.href = "/chat";
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