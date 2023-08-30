import { useColorMode } from '@vueuse/core'

export const useTheme = () => {
  const mode = useColorMode() // Ref<'dark' | 'light'>

  return {
    mode,
    toggleTheme: () => {
      mode.value = mode.value === 'dark' ? 'light' : 'dark'
    }
  }
}
