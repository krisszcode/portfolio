'use client'

import { ThemeProvider } from 'next-themes'
import { AuthProvider } from './context/authContext'

export function Providers({ children }) {
  return (
        <ThemeProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ThemeProvider>
    )
}