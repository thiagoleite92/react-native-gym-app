import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  Center,
  ScrollView,
  Text,
  VStack,
  Skeleton,
  Heading,
  useToast,
} from 'native-base'

import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

import { ScreenHeader } from '@components/ScreenHeader/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto/UserPhoto'
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'

const PHOTO_SIZE = 33

export default function Profile() {
  const Toast = useToast()

  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/thiagoleite92.png',
  )

  const handleUserPhotoSelect = async () => {
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (selectedPhoto?.canceled) {
        return
      }
      setPhotoIsLoading(true)

      if (selectedPhoto?.assets[0]?.uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          selectedPhoto?.assets[0]?.uri,
        )

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 3) {
          return Toast.show({
            title: 'Imagem muito grande. Máximo de 3mb',
            placement: 'top',
            bgColor: 'red.500',
            duration: 3000,
          })
        }
        setUserPhoto(selectedPhoto?.assets[0]?.uri)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

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
              source={{ uri: userPhoto }}
              size={PHOTO_SIZE}
              alt="User Photo"
            />
          )}
          <TouchableOpacity onPress={handleUserPhotoSelect}>
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
