import { useId, useState } from 'react'
import Container from '../components/ui/Container.jsx'
import Card from '../components/ui/Card.jsx'
import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx'
import Alert from '../components/ui/Alert.jsx'
import { validateContact } from '../lib/validation.js'

const EMPTY = { name: '', email: '', subject: '', message: '' }

const contactDetails = [
  {
    title: 'Email',
    body: 'support@gyaanacademy.com',
    href: 'mailto:support@gyaanacademy.com',
  },
  {
    title: 'Phone',
    body: '+61 111222333',
    href: 'tel:+61111222333',
  },
  {
    title: 'Office',
    body: 'Sydney, Australia',
  },
]

export default function Contact() {
  const messageId = useId()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function update(field) {
    return (event) => setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(false)
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSubmitting(false)
    setSubmitted(true)
    setValues(EMPTY)
  }

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <a href="/" className="text-slate-500 hover:text-brand-600">
                  Home
                </a>
              </li>
              <li className="text-slate-400" aria-hidden="true">
                /
              </li>
              <li className="font-medium text-slate-900" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <Container className="max-w-3xl py-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Contact us</h1>
          <p className="mt-4 text-lg text-slate-600">
            Have a question about a course, an account issue, or just want to say hello? Send us a
            message and we'll get back to you as soon as we can.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            {contactDetails.map((detail) => (
              <Card key={detail.title} className="p-6">
                <h3 className="font-semibold text-slate-900">{detail.title}</h3>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-2 block text-sm text-brand-700 hover:underline"
                  >
                    {detail.body}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-slate-600">{detail.body}</p>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8">
            {submitted && (
              <Alert tone="success" className="mb-6">
                Thanks for reaching out! We'll reply to your email shortly.
              </Alert>
            )}

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>
              <Input
                label="Subject"
                name="subject"
                value={values.subject}
                onChange={update('subject')}
                error={errors.subject}
              />
              <div>
                <label htmlFor={messageId} className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update('message')}
                  aria-invalid={Boolean(errors.message)}
                  className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                      : 'border-slate-300 focus:border-brand-500 focus:ring-brand-100'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
                )}
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          </Card>
        </Container>
      </section>
    </>
  )
}
