import { Box, Flex, VStack, HStack, Input, Text, Avatar, IconButton } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh" direction="column">
      {/* Navigation Bar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1.5rem"
        bg="blue.500"
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          ChatApp
        </Text>
        <IconButton
          aria-label="Profile"
          icon={<FaUserCircle />}
          size="lg"
          variant="ghost"
          color="white"
        />
      </Flex>

      <Flex flex="1" overflow="hidden">
        {/* Chat List */}
        <Box
          width={{ base: "100%", md: "30%" }}
          bg="gray.100"
          p="4"
          overflowY="auto"
          borderRight="1px solid"
          borderColor="gray.200"
        >
          <VStack spacing="4" align="stretch">
            <HStack spacing="4" p="2" bg="white" borderRadius="md" boxShadow="sm">
              <Avatar name="John Doe" />
              <VStack align="start" spacing="1">
                <Text fontWeight="bold">John Doe</Text>
                <Text fontSize="sm" color="gray.500">
                  Last message...
                </Text>
              </VStack>
            </HStack>
            {/* Repeat similar blocks for more chats */}
          </VStack>
        </Box>

        {/* Chat Window */}
        <Flex
          direction="column"
          flex="1"
          p="4"
          bg="white"
          overflow="hidden"
        >
          <Box flex="1" overflowY="auto" mb="4">
            {/* Messages will go here */}
            <VStack spacing="4" align="stretch">
              <Box bg="gray.100" p="3" borderRadius="md" alignSelf="flex-start">
                <Text>Hello!</Text>
              </Box>
              <Box bg="blue.100" p="3" borderRadius="md" alignSelf="flex-end">
                <Text>Hi there!</Text>
              </Box>
              {/* Repeat similar blocks for more messages */}
            </VStack>
          </Box>

          {/* Message Input */}
          <HStack spacing="4">
            <Input
              placeholder="Type a message..."
              bg="gray.100"
              borderRadius="md"
              flex="1"
            />
            <IconButton
              aria-label="Send"
              icon={<FaUserCircle />}
              size="lg"
              variant="solid"
              colorScheme="blue"
            />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;