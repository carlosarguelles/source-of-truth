import { BottomTabNavigator } from '@/components/BottomTabNavigator'
import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { CreateReport } from './CreateReport'
import { Home } from './Home'
import { Search } from './Search'

export type ScreenProps = {
  iconName: keyof typeof AntDesign['glyphMap']
  showInNavigator?: boolean
  showBottomBar?: boolean
}

export type ScreenParamList = {
  [key: string]: ScreenProps
}

const Tab = createBottomTabNavigator<ScreenParamList>()

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabNavigator {...props} />}
      screenOptions={{ header: () => null }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ iconName: 'home', showInNavigator: true }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        initialParams={{
          iconName: 'search1',
          showInNavigator: true,
        }}
      />
      <Tab.Screen
        name="Config"
        component={Search}
        initialParams={{
          iconName: 'setting',
          showInNavigator: true,
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen
        name="MainHome"
        component={HomeTabs}
        initialParams={{ showInNavigator: false, showBottomBar: false }}
      />
      <Stack.Screen
        name="CreateReport"
        component={CreateReport}
        initialParams={{ showInNavigator: false, showBottomBar: false }}
      />
    </Stack.Navigator>
  )
}
