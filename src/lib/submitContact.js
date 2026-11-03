import { contactInterests, site } from '../data/site'

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

function interestLabel(value) {
  return contactInterests.find((item) => item.value === value)?.label ?? value
}

/**
 * Sends a contact request. With VITE_CONTACT_ENDPOINT configured, the data is
 * POSTed as JSON. Otherwise the visitor's mail client opens with the message
 * pre-filled, so a submission is never silently dropped.
 *
 * @returns {Promise<{ method: 'endpoint' | 'mailto' }>}
 */
export async function submitContact(data) {
  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, interest: interestLabel(data.interest) }),
    })
    if (!response.ok) {
      throw new Error(`Contact request failed with status ${response.status}`)
    }
    return { method: 'endpoint' }
  }

  const subject = `${interestLabel(data.interest)} from ${data.name}`
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.organization ? `Organization: ${data.organization}` : null,
    `Interest: ${interestLabel(data.interest)}`,
    '',
    data.message,
  ].filter((line) => line !== null)

  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(lines.join('\n'))}`

  return { method: 'mailto' }
}
