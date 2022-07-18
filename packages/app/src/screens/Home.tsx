import { useVerifiedReportsQuery } from '@/generated/graphql'
import { wrapperStyle } from '@/utils/theme'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  Pressable,
  Select,
  Spacer,
  StatusBar,
  Text,
  View,
} from 'native-base'
import React, { useState } from 'react'
import { Card } from '../components/Card'

export const Home: React.FC = () => {
  const navigation = useNavigation()
  const [option, setOption] = useState('Reportes verificados')
  const [{ data, fetching }, refresh] = useVerifiedReportsQuery()
  return (
    <View flex={1}>
      <StatusBar barStyle="dark-content" />
      <Box
        safeArea
        bg="white"
        py="4"
        px="6"
        borderBottomWidth="0.5"
        borderColor="gray.200"
      >
        <HStack alignItems="center">
          <Select
            flex={3}
            variant="unstyled"
            selectedValue={option}
            onValueChange={(value) => setOption(value)}
          >
            <Select.Item
              label="Reportes verificados"
              value="Reportes verificados"
            />
            <Select.Item
              label="Reportes no verificados"
              value="Reportes no verificados"
            />
            <Select.Item
              label="Reportes pendientes"
              value="Reportes pendientes"
            />
          </Select>
          <Spacer />
          <HStack space="2">
            <Pressable bg="gray.200" rounded="xl" p="2">
              <Center>
                <Icon as={AntDesign} name="bells" color="black" />
              </Center>
            </Pressable>
            <Pressable
              bg="gray.200"
              rounded="xl"
              p="2"
              onPress={() => navigation.navigate('CreateReport')}
            >
              <Center>
                <Icon as={AntDesign} name="plus" color="black" />
              </Center>
            </Pressable>
          </HStack>
        </HStack>
      </Box>
      <View {...wrapperStyle} flex={1} px="0">
        <FlatList
          px="4"
          refreshing={fetching}
          onRefresh={() => refresh({ requestPolicy: 'network-only' })}
          py="4"
          data={data?.verifiedReports}
          renderItem={({ item }) => (
            <Card
              key={item.source.id + item.report.id}
              title={item.source.title}
              content={item.source.description}
              status={item.state}
              verifiedBy={item.source.user.username}
            />
          )}
          ListFooterComponent={() => (
            <Box p="4" mb="40">
              <Center>
                <Text>Parece que has llegado al final.</Text>
              </Center>
            </Box>
          )}
        ></FlatList>
      </View>
    </View>
  )
}
