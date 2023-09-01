import { HStack, Heading, Text, VStack } from 'native-base'

export const HistoryCard = () => {
  return (
    <HStack
      w="full"
      py={4}
      px={5}
      mb={3}
      bg="gray.600"
      rounded={'md'}
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5} flex={1}>
        <Heading
          color="white"
          fontSize="md"
          textTransform="capitalize"
          numberOfLines={2}
        >
          Costas
        </Heading>

        <Text color="gray.100" fontSize="lg" numberOfLines={2}>
          Puxada Frontal
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        08:56
      </Text>
    </HStack>
  )
}
