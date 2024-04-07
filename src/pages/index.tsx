import { Header } from "@/components/header";
import { Tournament } from "@/components/tournament";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Flex w="full" flexDir="column" p="4">
      <Header />
      <HStack spacing={10}>
        <Tournament />
        <Tournament />
        <Tournament />

        <Button colorScheme="green" variant={"outline"}>
          <Link href={"https://youtube.com"}>Criar</Link>
        </Button>

        <Box w="200px" h="199px"></Box>
      </HStack>
    </Flex>
  );
}
