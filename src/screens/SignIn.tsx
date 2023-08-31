import { useNavigation } from '@react-navigation/native'
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base'

import Input from '@components/Input/Input'
import Button from '@components/Button/Button'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export default function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>()

  return (
    <ScrollView
      _contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackgroundImg}
          alt="Pessoas Treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color="gray.100"
            fontSize={'xl'}
            mb={6}
            fontFamily={'heading'}
          >
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize={'sm'} mb={3}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar Conta"
            variant="outline"
            onPress={() => navigate('signUp')}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
