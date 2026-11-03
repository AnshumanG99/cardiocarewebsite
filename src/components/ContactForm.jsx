import { Check } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { contactInterests, site } from '../data/site'
import { cn } from '../lib/cn'
import { submitContact } from '../lib/submitContact'
import Button from './ui/Button'

const fieldClass =
  'w-full rounded-xl border bg-white/[0.06] px-4 py-3 text-[17px] text-white placeholder:text-white/35 transition-colors focus:border-teal-glow focus:bg-white/[0.08] focus:outline-none focus:ring-4 focus:ring-teal-glow/20'

function Field({ label, id, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-[14px] font-semibold text-white">
        {label}
        {optional && <span className="font-normal text-white/45">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[14px] text-[#ff8a80]">
          {error}
        </p>
      )}
    </div>
  )
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Add your name.'
  if (!values.email.trim()) errors.email = 'Add an email address so we can reply.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'That email address does not look right.'
  if (!values.message.trim()) errors.message = 'Add a short message.'
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
      <div className="py-6 text-center">
        <span className="bg-gradient-brand mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-[24px] font-bold tracking-[-0.01em] text-white">
          {status.method === 'endpoint' ? 'Got it.' : 'One more step.'}
        </h3>
        <p className="copy mx-auto mt-2 max-w-md">
          {status.method === 'endpoint'
            ? 'Thanks for writing. We usually reply within a day or two.'
            : `Your email app should have opened with the message filled in. If it did not, email us at ${site.email}.`}
        </p>
        <Button variant="link" className="mt-6" chevron onClick={reset}>
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
            className={cn(fieldClass, errors.name ? 'border-[#ff8a80]' : 'border-white/15')}
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
            className={cn(fieldClass, errors.email ? 'border-[#ff8a80]' : 'border-white/15')}
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
          className={cn(fieldClass, 'border-white/15')}
        />
      </Field>

      <Field label="What are you interested in?" id="interest">
        <select id="interest" name="interest" value={values.interest} onChange={update} className={cn(fieldClass, 'border-white/15')}>
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
          className={cn(fieldClass, 'resize-none', errors.message ? 'border-[#ff8a80]' : 'border-white/15')}
        />
      </Field>

      {status.state === 'error' && (
        <p role="alert" className="rounded-xl bg-[#ff8a80]/15 px-4 py-3 text-[14px] text-white">
          That did not go through. Try again, or email us at{' '}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status.state === 'submitting'}>
          {status.state === 'submitting' ? 'Sending' : 'Send'}
        </Button>
        <p className="text-[12px] text-white/45">We only use this to reply to you.</p>
      </div>
    </form>
  )
}
