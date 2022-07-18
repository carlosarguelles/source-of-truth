import { wrapperStyle } from '@/utils/theme'
import { useNavigation } from '@react-navigation/native'
import {
  Divider,
  HStack,
  KeyboardAvoidingView,
  Pressable,
  Select,
  Spacer,
  Text,
  TextArea,
  useToast,
  View,
} from 'native-base'
import React, { useRef, useState } from 'react'
import { Platform, TextInput } from 'react-native'
import {
  useCategoriesQuery,
  useCreateReportMutation,
} from '../generated/graphql'

export const CreateReport: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('General')

  const descriptionRef = useRef<TextInput>(null)

  const [{ fetching: creatingReport }, createReport] = useCreateReportMutation()
  const [{ data: categories }] = useCategoriesQuery()

  const toast = useToast()
  const navigation = useNavigation()

  const handleSubmit = async () => {
    const result = await createReport({
      data: {
        title,
        description,
        category: {
          connect: {
            name: category,
          },
        },
        user: {
          connect: {
            id: 'ac055d56-1844-4ae0-b2ac-191397c7950a',
          },
        },
      },
    })

    if (!result.error) {
      toast.show({
        description: 'Reporte creado con éxito',
        placement: 'top',
      })
      navigation.navigate('Home')
    }
  }

  return (
    <KeyboardAvoidingView
      h="full"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View {...wrapperStyle} flex={1} pt="4">
        <HStack mb="2" mt="4">
          <Pressable onPress={() => navigation.goBack()}>
            <Text color="indigo.400">Atrás</Text>
          </Pressable>
          <Spacer />
          <Pressable onPress={handleSubmit} disabled={creatingReport}>
            <Text color="indigo.400">
              {creatingReport ? 'Enviando...' : 'Crear reporte'}
            </Text>
          </Pressable>
        </HStack>
        <TextInput
          autoComplete="off"
          value={title}
          placeholder="Escribe un título..."
          style={{
            fontWeight: '600',
            fontSize: 24,
            marginBottom: 6,
          }}
          onChangeText={(title) => setTitle(title)}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === 'Enter') {
              descriptionRef?.current?.focus()
            }
          }}
        />
        <TextArea
          flex={1}
          ref={descriptionRef}
          placeholder="Escribe una descripción..."
          autoCompleteType="off"
          value={description}
          variant="unstyled"
          p="0"
          fontSize="md"
          onChangeText={(description) => setDescription(description)}
        />
        <Divider mb="4" />
        <Text mb="2">Categoría:</Text>
        <Select
          selectedValue={category}
          onValueChange={(category) => setCategory(category)}
          mb="2"
        >
          {categories?.categories.map((c) => (
            <Select.Item value={c.name} key={c.name} label={c.name} />
          ))}
        </Select>
      </View>
    </KeyboardAvoidingView>
  )
}
