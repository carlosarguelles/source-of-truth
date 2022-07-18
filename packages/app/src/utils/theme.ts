import { extendTheme } from 'native-base'
import { InterfaceScrollViewProps } from 'native-base/lib/typescript/components/basic/ScrollView/types'
import { InterfaceViewProps } from 'native-base/lib/typescript/components/basic/View/types'

export const theme = extendTheme({
  components: {},
})

export const wrapperStyle: InterfaceScrollViewProps & InterfaceViewProps = {
  bg: 'white',
  px: '6',
}
