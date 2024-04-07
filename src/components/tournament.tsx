import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Tournament() {
  return (
    <Flex flexDir="column">
      <Box w='256px'>
        <Image src="https://t.ctcdn.com.br/dW8h7oVY5OcOlbeQ8JBoShg2FPQ=/1024x576/smart/i835095.jpeg" alt="Dan Abramov" />
      </Box>     
      <Text>Data de inicio: 24/02/2024</Text>
      <Text>Admin: Bruce#4562</Text>
      <Text>86 Players</Text>      
    </Flex>
  );
}
