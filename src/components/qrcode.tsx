import { colors } from '@/styles/colors'
import QRCodeSvg from 'react-native-qrcode-svg'

interface QRCodeProps {
  value: string
  size: number
}

export function QRCode({ size, value }: QRCodeProps) {
  return (
    <QRCodeSvg
      value={value}
      size={size}
      color={colors.white}
      backgroundColor="transparent"
    />
  )
}
