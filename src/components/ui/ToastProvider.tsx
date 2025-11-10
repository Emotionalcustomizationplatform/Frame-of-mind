"use client";
import { createStandaloneToast } from "@chakra-ui/react";

export const toast = createStandaloneToast();

export const showToast = (title: string, description?: string, status: "success"|"error"|"info"|"warning"="info") => {
  toast({
    title,
    description,
    status,
    duration: 4000,
    isClosable: true,
    position: "top-right"
  });
};
