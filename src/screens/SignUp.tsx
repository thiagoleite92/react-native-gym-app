import { useNavigation } from '@react-navigation/native'
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o email').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve ter ao menos 6 dígitos'),
  password_confirm: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password')], 'Senhas não conferem'),
})

export default function SignUp() {
  const { goBack } = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  })

  const handleSignUp = async (data: FormDataProps) => {
    console.log(data)
  }

  return (
    <ScrollView
      _contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      mb={8}
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
            Crie sua Conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  errorMessage={errors.name?.message}
                />
              </>
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="E-mail"
                  onChangeText={onChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  errorMessage={errors.email?.message}
                />
              </>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="Senha"
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                  autoCapitalize="none"
                  errorMessage={errors.password?.message}
                />
              </>
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="Confirmar Senha"
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                  autoCapitalize="none"
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.password_confirm?.message}
                />
              </>
            )}
          />

          <Button
            title="Criar e Acessar"
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Button
          mt={12}
          title="Voltar para o login"
          variant="outline"
          onPress={() => goBack()}
        />
      </VStack>
    </ScrollView>
  )
}
