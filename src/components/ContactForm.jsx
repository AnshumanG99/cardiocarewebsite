import { Check } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { contactInterests, site } from '../data/site'
import { cn } from '../lib/cn'
import { submitContact } from '../lib/submitContact'
import Button from './ui/Button'

const fieldClass =
  'w-full rounded-xl border bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30'

function Field({ label, id, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-ink-800">
        {label}
        {optional && <span className="text-xs font-normal text-ink-400">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-brand-coral">
          {error}
        </p>
      )}
    </div>
  )
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'Please add an email address so we can reply.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'That email address does not look right.'
  if (!values.message.trim()) errors.message = 'Please include a short message.'
  return errors
}

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const requested = searchParams.get('interest')
  const initialInterest = contactInterests.some((item) => item.value === requested) ? requested : 'demo'

  const [values, setValues] = useState({ name: '', email: '', organization: '', interest: initialInterest, message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle' })

  const update = (event) => {
    const { name, value } = event.target
    setValues((previous) => ({ ...previous, [name]: value }))
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus({ state: 'submitting' })
    try {
      const result = await submitContact(values)
      setStatus({ state: 'sent', method: result.method })
    } catch {
      setStatus({ state: 'error' })
    }
  }

  const reset = () => {
    setValues({ name: '', email: '', organization: '', interest: initialInterest, message: '' })
    setErrors({})
    setStatus({ state: 'idle' })
  }

  if (status.state === 'sent') {
    return (
      <div className="flex h-full flex-col items-start justify-center py-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-ink-900">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="display mt-6 text-3xl">
          {status.method === 'endpoint' ? 'Message received.' : 'Almost there.'}
        </h3>
        <p className="mt-3 max-w-md text-ink-600">
          {status.method === 'endpoint'
            ? `Thanks for reaching out. We reply to every message within ${site.responseTime}.`
            : `Your email app should have opened with the message ready to send. If it did not, email us directly at ${site.email}.`}
        </p>
        <Button variant="secondary" className="mt-8" onClick={reset}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(fieldClass, errors.name ? 'border-brand-coral' : 'border-ink-200')}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Email" id="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(fieldClass, errors.email ? 'border-brand-coral' : 'border-ink-200')}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Organization" id="organization" optional>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          value={values.organization}
          onChange={update}
          className={cn(fieldClass, 'border-ink-200')}
          placeholder="Clinic, company, or institution"
        />
      </Field>

      <Field label="I'm interested in" id="interest">
        <select
          id="interest"
          name="interest"
          value={values.interest}
          onChange={update}
          className={cn(fieldClass, 'border-ink-200')}
        >
          {contactInterests.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" id="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(fieldClass, 'resize-none', errors.message ? 'border-brand-coral' : 'border-ink-200')}
          placeholder="Tell us a little about what you have in mind."
        />
      </Field>

      {status.state === 'error' && (
        <p role="alert" className="rounded-xl bg-brand-coral/10 px-4 py-3 text-sm text-ink-800">
          Something went wrong sending your message. Please try again, or email us at{' '}
          <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status.state === 'submitting'}>
          {status.state === 'submitting' ? 'Sending' : 'Send message'}
        </Button>
        <p className="text-xs leading-relaxed text-ink-500">
          We only use your details to reply to you.
        </p>
      </div>
    </form>
  )
}
