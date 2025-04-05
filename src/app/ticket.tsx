import { Button } from '@/components/button'
import { Creadential } from '@/components/credential'
import { Header } from '@/components/header'
import { QRCode } from '@/components/qrcode'
import { colors } from '@/styles/colors'
import { FontAwesome } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import {
  Alert,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function Ticket() {
  const [image, setImage] = useState('')
  const [showQRCode, setShowQRCode] = useState(false)

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      })

      if (result.assets) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Foto', 'não foi possível selecionar a imagem')
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle={'light-content'} />

      <Header title="Minha Credencial" />

      <ScrollView
        contentContainerClassName="px-6 pb-6"
        showsVerticalScrollIndicator={false}
      >
        <Creadential
          image={image}
          onChangeAvatar={handleSelectImage}
          onShowQRCode={() => setShowQRCode(true)}
        />

        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          className="self-center my-6"
        />

        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo que você irá participar do Unite Summit
        </Text>

        <Button title="Compartilhar" />

        <TouchableOpacity activeOpacity={0.6} className="mt-10">
          <Text className="text-base text-white font-bold text-center">
            Remover ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={showQRCode} statusBarTranslucent animationType="fade">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <QRCode value="teste" size={300} />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setShowQRCode(false)}
          >
            <Text className="font-body text-orange-500 text-base text-center mt-10">
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
