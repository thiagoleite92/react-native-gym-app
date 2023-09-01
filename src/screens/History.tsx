import { Center, Text, VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard/HistoryCard'

import React from 'react'

export default function History() {
  return (
    <VStack>
      <ScreenHeader title="Histórico" />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  )
}
