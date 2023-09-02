import { Heading, HStack, Text, VStack, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import { UserPhoto } from '@components/UserPhoto/UserPhoto'
import { TouchableOpacity } from 'react-native'

export const HomeHeader = () => {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems={'center'}>
      <UserPhoto
        size={16}
        source={{ uri: 'https://github.com/thiagoleite92.png' }}
        mr={4}
      />
      <VStack flex={1}>
        <Text color={'gray.100'} fontSize={'md'}>
          Olá,
        </Text>

        <Heading fontFamily={'heading'} color={'gray.100'} fontSize={'md'}>
          Rodrigo
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" size={7} color="gray.200" />
      </TouchableOpacity>
    </HStack>
  )
}
