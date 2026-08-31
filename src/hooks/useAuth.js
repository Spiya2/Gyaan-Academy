import { useContext } from 'react'
import { AuthContext } from '../context/auth-context.js'

/** Access the current user and auth actions. */
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an <AuthProvider>')
  return ctx
}
