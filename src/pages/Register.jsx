import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/ui/Container.jsx'
import Card from '../components/ui/Card.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import Alert from '../components/ui/Alert.jsx'
import { useAuth } from '../hooks/useAuth.js'
import { validateRegister } from '../lib/validation.js'

const EMPTY = { name: '', email: '', password: '', confirmPassword: '' }

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState(null)

  function update(field) {
    return (event) => setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setFormError(null)
    const nextErrors = validateRegister(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    try {
      setSubmitting(true)
      await register(values)
      navigate('/', { replace: true })
    } catch {
      setFormError('Something went wrong creating your account. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Container className="flex justify-center py-16">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
        <p className="mt-1 text-sm text-slate-600">Free forever. No credit card required.</p>

        {formError && (
          <Alert tone="error" className="mt-6">
            {formError}
          </Alert>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <Input
            label="Full name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            error={errors.name}
          />
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
            autoComplete="new-password"
            value={values.password}
            onChange={update('password')}
            error={errors.password}
            hint="At least 8 characters."
          />
          <Input
            label="Confirm password"
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            value={values.confirmPassword}
            onChange={update('confirmPassword')}
            error={errors.confirmPassword}
          />
          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? 'Creating account…' : 'Create account'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-brand-700 hover:underline">
            Log in
          </Link>
        </p>
      </Card>
    </Container>
  )
}
