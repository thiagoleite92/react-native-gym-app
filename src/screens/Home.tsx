import { useState } from 'react'
import { Group } from '@components/Group/Group'
import { HomeHeader } from '@components/HomeHeader/HomeHeader'
import { Center, FlatList, HStack, Heading, Text, VStack } from 'native-base'

export default function Home() {
  const [groups, setGroups] = useState(['ombros', 'costas', 'peito', 'braços'])
  const [selectGroup, setSelectGroup] = useState('ombros')

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={item === selectGroup}
            onPress={() => setSelectGroup(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxHeight={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent={'space-between'}>
          <Heading color={'gray.200'} fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize={'sm'}>
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  )
}
