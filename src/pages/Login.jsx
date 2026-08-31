import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Container from '../components/ui/Container.jsx'
import Card from '../components/ui/Card.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import Alert from '../components/ui/Alert.jsx'
import { useAuth } from '../hooks/useAuth.js'
import { validateLogin } from '../lib/validation.js'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from ?? '/'

  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState(null)

  function update(field) {
    return (event) => setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setFormError(null)
    const nextErrors = validateLogin(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    try {
      setSubmitting(true)
      await login(values)
      navigate(redirectTo, { replace: true })
    } catch {
      setFormError('We could not sign you in. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Container className="flex justify-center py-16">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-slate-900">Log in</h1>
        <p className="mt-1 text-sm text-slate-600">Welcome back. Enter your details to continue.</p>

        {formError && (
          <Alert tone="error" className="mt-6">
            {formError}
          </Alert>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <Input
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={values.password}
            onChange={update('password')}
            error={errors.password}
          />
          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? 'Signing in…' : 'Log in'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          New here?{' '}
          <Link to="/register" className="font-medium text-brand-700 hover:underline">
            Create an account
          </Link>
        </p>
      </Card>
    </Container>
  )
}
