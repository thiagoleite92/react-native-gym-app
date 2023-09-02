import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'

import { Group } from '@components/Group/Group'
import { HomeHeader } from '@components/HomeHeader/HomeHeader'
import { ExerciseCard } from '@components/ExerciseCard/ExerciseCard'
import { AppNavigatorRouteProps } from '@routes/app.routes'

export default function Home() {
  const { navigate } = useNavigation<AppNavigatorRouteProps>()

  const [groups, setGroups] = useState(['ombros', 'costas', 'peito', 'braços'])
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'remada baixa',
    'remada alta',
    'rosca direta',
  ])
  const [selectGroup, setSelectGroup] = useState('ombros')

  const handleOpenExerciseDetails = () => {
    navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={item.toLowerCase() === selectGroup.toLowerCase()}
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
        minHeight={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent={'space-between'}>
          <Heading fontFamily={'heading'} color={'gray.200'} fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize={'sm'}>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 20 }}
        />
      </VStack>
    </VStack>
  )
}
