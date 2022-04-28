import { HStack, Button, Text, VStack } from "@chakra-ui/react";

export const PageContent = () => {
  return (
    <VStack pb={36} color={"white"}>
      <Text fontSize="4xl">Олесни го твоето домаќинство со нашите услуги</Text>
      <Text>Добредојвте на нашата веб страница</Text>
      <HStack w="full" justify="center" spacing={12}>
        <Button shadow="md" bg={"#93A560"} w={48} h={57} size='lg' _hover={{ bg: "#6B774B" }} >
          Најди помошник
        </Button>
        <Button shadow="md" bg={"#93A560"} w={48} h={57} size='lg' _hover={{ bg: "#6B774B" }} >
          Пријави се
        </Button>
      </HStack>
    </VStack>
  );
};
