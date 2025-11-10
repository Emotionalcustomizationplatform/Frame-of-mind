import { Box, Skeleton, VStack } from "@chakra-ui/react";

export default function SkeletonCard() {
  return (
    <Box borderRadius="md" p={4} borderWidth={1} borderColor="gray.200" bg="white">
      <VStack spacing={3}>
        <Skeleton height="20px" width="60%" />
        <Skeleton height="16px" width="80%" />
        <Skeleton height="16px" width="70%" />
      </VStack>
    </Box>
  );
}
