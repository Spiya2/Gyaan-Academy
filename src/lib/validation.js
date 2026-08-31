/** Small, dependency-free validators shared by the auth forms. */

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export function validateLogin({ email, password }) {
  const errors = {}
  if (!email.trim()) errors.email = 'Email is required.'
  else if (!isEmail(email)) errors.email = 'Enter a valid email address.'
  if (!password) errors.password = 'Password is required.'
  return errors
}

export function validateRegister({ name, email, password, confirmPassword }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Name is required.'
  else if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'
  if (!email.trim()) errors.email = 'Email is required.'
  else if (!isEmail(email)) errors.email = 'Enter a valid email address.'
  if (!password) errors.password = 'Password is required.'
  else if (password.length < 8) errors.password = 'Use at least 8 characters.'
  if (confirmPassword !== password) errors.confirmPassword = 'Passwords do not match.'
  return errors
}
