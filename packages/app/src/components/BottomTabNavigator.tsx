import { ScreenProps } from '@/screens'
import { AntDesign } from '@expo/vector-icons'
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs'
import { Center, HStack, Icon, Pressable } from 'native-base'
import React from 'react'

interface TabButtonProps {
  isFocused: boolean
  options: BottomTabNavigationOptions
  onPress: () => void
  onLongPress: () => void
  label: string
  initOptions?: ScreenProps
}

export const TabButton: React.FC<TabButtonProps> = ({
  isFocused,
  options,
  onPress,
  onLongPress,
  label,
  initOptions,
}) => {
  return (
    <Pressable
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      rounded="2xl"
      bg={isFocused ? 'gray.200' : 'white'}
      p="3"
    >
      <Center>
        <Icon
          as={AntDesign}
          name={initOptions?.iconName}
          size="lg"
          color="black"
        />
      </Center>
    </Pressable>
  )
}

export const BottomTabNavigator = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <HStack
      bg="white"
      alignItems="center"
      justifyContent="center"
      safeAreaBottom
      padding="4"
      roundedTop="3xl"
      space="lg"
      shadow="8"
      position="absolute"
      bottom="0"
      width="full"
    >
      {state.routes
        .filter((route) => {
          const params = route.params as ScreenProps
          return params.showInNavigator
        })
        .map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TabButton
              key={index}
              onLongPress={onLongPress}
              onPress={onPress}
              options={options}
              isFocused={isFocused}
              label={label as string}
              initOptions={route.params as ScreenProps}
            />
          )
        })}
    </HStack>
  )
}
