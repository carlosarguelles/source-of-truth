import { Box, HStack, Pressable, Spacer, Text } from 'native-base'
import React from 'react'
import { Badge, Status } from './Badge'

export interface CardProps {
  title: string
  content: string
  status: Status
  verifiedBy?: string | null
} 

export const Card: React.FC<CardProps> = ({
  title,
  content,
  status,
  verifiedBy,
}) => {
  return (
    <Box
      padding="5"
      bg="white"
      rounded="2xl"
      flex={1}
      borderWidth="0.5"
      borderColor="gray.200"
      mb="5"
    >
      <HStack alignItems="center" pb="1">
        <Badge status={status} />
        <Spacer />
        {verifiedBy && (
          <HStack alignItems="center">
            <Text>Verificado por </Text>
            <Pressable onPress={() => ''}>
              <Text color="indigo.400">{verifiedBy}</Text>
            </Pressable>
          </HStack>
        )}
      </HStack>
      <Text fontSize="2xl" fontWeight="semibold">
        {title}
      </Text>
      <Text>{content}</Text>
      <Pressable>
        <Text color="indigo.400">Ver más</Text>
      </Pressable>
    </Box>
  )
}
