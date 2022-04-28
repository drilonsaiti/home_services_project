import {
  useColorModeValue,
  Image,
  Icon,
  Link,
  Heading,
  VStack,
  Text,
  HStack,
  AspectRatio,
  Divider,
  Button,
  Container,
  Avatar,
} from "@chakra-ui/react";
import { FiEdit, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsTwitter, BsLinkedin, BsDribbble } from "react-icons/bs";



const HelperCard = () => {
  const bgColor = useColorModeValue("gray.50", "whiteAplha.50");
  return (
    <VStack
      w={400}
      h="full"
      p={10}
      spacing={10}
      alignItems="center"
      bg={bgColor}
      borderRadius={10}
    >
      <VStack spacing={3} alignItems="center">
        <AspectRatio ratio={1} w={24}>
          <Avatar name='Ивана Јовановска' src="images/Avatar.jpg" />
        </AspectRatio>

        <Heading size="md">Ивана Јовановска</Heading>
        <Text color="#6941C6">Founder & CEO</Text>
        <Text textAlign="center" color="#667085">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <HStack justifyContent="space-between" color="#98A2B3">
          <Link href="#">
            <BsTwitter />
          </Link>
          <Link href="#">
            <BsLinkedin />
          </Link>
          <Link href="#">
            <BsDribbble />
          </Link>
        </HStack>

        <Divider size="lg" />

        <Button w="full" h={70} size="lg" colorScheme="green">
          Додади Услуга
        </Button>

        <Container w="full" p={5} >
          <VStack alignItems="flex-start">
            <VStack>
              <Heading size="xs">Твои поставки</Heading>
            </VStack>
            <VStack textAlign="start">
              <HStack>
                <Heading size="xs">Цена:</Heading>
                <Text fontSize="sm">По договор</Text>
              </HStack>
            </VStack>

            <VStack>
              <HStack>
                <Heading size="xs">Достапност:</Heading>
                <Text fontSize="sm">09:00ч до 21:00ч</Text>
              </HStack>
            </VStack>

            <VStack>
              <HStack>
                <Heading size="xs">Локација:</Heading>
                <Text fontSize="sm">Куманово</Text>
              </HStack>
            </VStack>
          </VStack>
          <VStack alignItems="flex-end">
            <Button 
              leftIcon={<Icon as={FiEdit} />}
              bg="#E56262" 
              color="white" 
              _hover={{ bg: "#E53E3E" }} 
              variant="ghost"
            >Измени</Button>
          </VStack>
        </Container>
      </VStack>
    </VStack>
  );
};

export default HelperCard;
