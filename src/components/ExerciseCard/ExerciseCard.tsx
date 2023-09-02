import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base'
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {}

export const ExerciseCard = ({ ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg={'gray.500'}
        p={2}
        pr={4}
        rounded={'md'}
        mb="3"
        alignItems={'center'}
      >
        <Image
          source={{
            uri: 'https://static1.minhavida.com.br/articles/19/82/45/dd/mulher-branca-de-cabelos-castanhos-e-lisos-presos-em-um-rabo-de-cavalo-veste-legging-e-top-de-academia-pretos-enquanto-faz-o-exercicio-remada-curvada-article-1.jpg',
          }}
          alt="Exercise Card"
          w={16}
          h={16}
          rounded={'md'}
          mr="4"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontFamily={'heading'} fontSize="lg" color="white">
            Remada Curvada
          </Heading>
          <Text fontSize="sm" color="gray.300" numberOfLines={2}>
            3 séries x 12 reps
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}
