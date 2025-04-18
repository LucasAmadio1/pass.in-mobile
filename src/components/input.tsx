import { colors } from '@/styles/colors'
import type { ReactNode } from 'react'
import { TextInput, type TextInputProps, View } from 'react-native'

interface InputProps {
  children: ReactNode
}

function Input({ children }: InputProps) {
  return (
    <View className="w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg">
      {children}
    </View>
  )
}

function Field({ ...props }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-white text-base font-regular"
      placeholderTextColor={colors.gray[200]}
      {...props}
    />
  )
}

Input.Field = Field

export { Input }
