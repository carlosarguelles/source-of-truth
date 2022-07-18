import { Box, Text } from 'native-base'
import {
  ColorType,
  ResponsiveValue,
} from 'native-base/lib/typescript/components/types'
import React from 'react'

export type Status = 'TRUE' | 'FALSE' | 'NOT_VERIFIED' | 'PENDING'

export const StatusText: Record<Status, string> = {
  TRUE: 'Verdad',
  FALSE: 'Falso',
  PENDING: 'Pendiente',
  NOT_VERIFIED: 'No verificada',
}

export const StatusColors: Record<Status, ResponsiveValue<ColorType>> = {
  TRUE: 'green.400',
  FALSE: 'red.400',
  PENDING: 'gray.400',
  NOT_VERIFIED: 'black',
}

export const Badge: React.FC<{
  status: Status
}> = ({ status }) => {
  return (
    <Box bg={StatusColors[status]} rounded="full">
      <Text px="2" py="1" fontWeight="semibold" fontSize="xs" color="white">
        {StatusText[status].toUpperCase()}
      </Text>
    </Box>
  )
}
