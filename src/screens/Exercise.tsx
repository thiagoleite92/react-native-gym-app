import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
  Box,
  ScrollView,
} from 'native-base'
import { Feather } from '@expo/vector-icons'

import { AppNavigatorRouteProps } from '@routes/app.routes'

import Button from '@components/Button/Button'

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepsSvg from '@assets/repetitions.svg'

export default function Exercise() {
  const { goBack } = useNavigation<AppNavigatorRouteProps>()

  const handleGoBack = () => {
    goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg={'gray.600'} pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>
        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems={'center'}
        >
          <Heading color={'gray.100'} pt={12} fontSize={'lg'} flexShrink={1}>
            Puxada Frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: 'https://static1.minhavida.com.br/articles/19/82/45/dd/mulher-branca-de-cabelos-castanhos-e-lisos-presos-em-um-rabo-de-cavalo-veste-legging-e-top-de-academia-pretos-enquanto-faz-o-exercicio-remada-curvada-article-1.jpg',
            }}
            alt="Nome do Exercício"
            mb={3}
            resizeMode="cover"
            rounded={'lg'}
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-around'}
              mb={6}
              mt={5}
            >
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepsSvg />
                <Text color="gray.200" ml={2}>
                  12 Reps
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
