import { HomeHeader } from '@/screens/Home'

export const Headers: Record<string, React.FC<any> | undefined> = {
  Home: HomeHeader,
  Search: HomeHeader,
  Config: HomeHeader,
  CreateReport: undefined,
}
