import { useState } from 'react'
import { Center, FlatList, HStack, Heading, Text, VStack } from 'native-base'

import { Group } from '@components/Group/Group'
import { HomeHeader } from '@components/HomeHeader/HomeHeader'
import { ExerciseCard } from '@components/ExerciseCard/ExerciseCard'

export default function Home() {
  const [groups, setGroups] = useState(['ombros', 'costas', 'peito', 'braços'])
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'remada baixa',
    'remada alta',
    'rosca direta',
  ])
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
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 20 }}
        />
      </VStack>
    </VStack>
  )
}
