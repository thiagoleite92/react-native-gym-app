import { useState } from 'react'
import { Center, Heading, Text, VStack, SectionList } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard/HistoryCard'

export default function History() {
  const [history, setHistory] = useState([
    {
      title: 'Hoje',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Ontem',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Anteontem',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Retrasado',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />

      <SectionList
        sections={history}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={5} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          history.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}
