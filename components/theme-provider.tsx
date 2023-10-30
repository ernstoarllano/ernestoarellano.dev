'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

interface ThemeProviderProps {
  /**
   * The children.
   */
  children: React.ReactNode
}

/**
 * Component to provide the theme.
 *
 * @param {ThemeProviderProps} props The props.
 * @returns {JSX.Element} The theme provider.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  )
}
