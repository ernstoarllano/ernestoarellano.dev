'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

import { useIsMounted } from '@/hooks/use-is-mounted'

/**
 * Component for the theme switcher.
 *
 * @returns {JSX.Element} The theme switcher.
 */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { mounted } = useIsMounted()

  const icon = {
    light: <Moon className="text-white" />,
    dark: <Sun className="text-white" />,
  }

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <Button
      className="absolute top-4 right-4 p-0 bg-transparent hover:bg-transparent"
      onClick={handleThemeChange}
    >
      {theme === 'light' ? icon.light : icon.dark}
    </Button>
  )
}
