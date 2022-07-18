import { StackNavigator } from '@/screens'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'http://192.168.1.60:4000/graphql',
})

export default function App() {
  return (
    <Provider value={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}
