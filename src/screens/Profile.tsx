import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  Center,
  ScrollView,
  Text,
  VStack,
  Skeleton,
  Heading,
} from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto/UserPhoto'
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'

const PHOTO_SIZE = 33

export default function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading && (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.400"
              endColor="gray.300"
            />
          )}

          {!photoIsLoading && (
            <UserPhoto
              source={{ uri: 'https://github.com/thiagoleite92.png' }}
              size={PHOTO_SIZE}
              alt="User Photo"
            />
          )}
          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight={'bold'}
              fontSize={'md'}
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input bg={'gray.600'} placeholder="Nome" />
          <Input bg={'gray.600'} placeholder="leite.tjs@gmail.com" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color={'gray.200'} fontSize="md" mb="2">
            Alterar Senha
          </Heading>

          <Input bg={'gray.600'} placeholder="Senha Antiga" secureTextEntry />
          <Input bg={'gray.600'} placeholder="Senha Nova" secureTextEntry />
          <Input
            bg={'gray.600'}
            placeholder="Confirmar Senha Nova"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
