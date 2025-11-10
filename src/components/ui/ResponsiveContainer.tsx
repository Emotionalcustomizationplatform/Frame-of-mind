import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ResponsiveContainer({ children }: { children: ReactNode }) {
  return <Box maxW="1100px" mx="auto" px={4}>{children}</Box>;
}
