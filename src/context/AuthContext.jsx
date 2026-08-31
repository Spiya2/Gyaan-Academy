import { useCallback, useEffect, useMemo, useState } from 'react'
import { AuthContext } from './auth-context.js'

const STORAGE_KEY = 'edu.auth.user'

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/**
 * Mock authentication provider.
 *
 * There is no real backend for this assignment, so `login` and `register`
 * simulate a network round-trip and persist the "session" to localStorage.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser)

  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* storage unavailable — non-fatal */
    }
  }, [user])

  const login = useCallback(async ({ email }) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    const nextUser = { name: email.split('@')[0], email }
    setUser(nextUser)
    return nextUser
  }, [])

  const register = useCallback(async ({ name, email }) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    const nextUser = { name, email }
    setUser(nextUser)
    return nextUser
  }, [])

  const logout = useCallback(() => setUser(null), [])

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), login, register, logout }),
    [user, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
