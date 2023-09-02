import {
  Input as NativeBaseInput,
  IInputProps,
  Text,
  FormControl,
} from 'native-base'
import React from 'react'

type Props = IInputProps & {
  errorMessage?: string | null
  isInvalid?: boolean
}

export default function Input({
  errorMessage = null,
  isInvalid = false,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize={'md'}
        color={'white'}
        fontFamily={'body'}
        placeholderTextColor={'gray.300'}
        _focus={{
          bg: 'gray.700',
          borderWidth: '1px',
          borderColor: 'green.500',
        }}
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
