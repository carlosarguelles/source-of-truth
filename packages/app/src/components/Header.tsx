import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { Headers } from '@/components/Headers'

export const Header: React.FC<BottomTabHeaderProps> = (props) => {
  const CurrentHeader = Headers[props.route.name]
  
  if (!CurrentHeader) {
    return null
  }

  return <CurrentHeader {...props} />
}
