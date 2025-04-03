import '../styles/global.css'

import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'

export default function Layout() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Slot />
    </>
  )
}