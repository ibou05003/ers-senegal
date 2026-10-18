import { NextResponse } from 'next/server'

const SUBJECTS: Record<string, string> = {
  partnership: 'Partenariat',
  employment: 'Emploi',
  press: 'Presse',
  investment: 'Investissement',
  other: 'Autre',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function field(body: Record<string, unknown>, key: string, max: number) {
  const value = body[key]
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 })
  }

  // Champ piège invisible : un humain ne le remplit jamais.
  if (field(body, 'website', 200)) {
    return NextResponse.json({ ok: true })
  }

  const name = field(body, 'name', 120)
  const email = field(body, 'email', 200)
  const phone = field(body, 'phone', 40)
  const subject = SUBJECTS[field(body, 'subject', 40)]
  const message = field(body, 'message', 5000)

  if (!name || !EMAIL_RE.test(email) || !subject || !message) {
    return NextResponse.json({ error: 'invalid' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY manquante')
    return NextResponse.json({ error: 'server' }, { status: 500 })
  }

  const html = `
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(phone || '-')}</p>
    <p><strong>Motif :</strong> ${subject}</p>
    <p><strong>Message :</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'Site ERS <noreply@er-senegal.com>',
      to: (process.env.CONTACT_TO_EMAIL || 'contact@er-senegal.com').split(',').map((s) => s.trim()),
      reply_to: email,
      subject: `[Site web] ${subject} - ${name}`,
      html,
      text: `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone || '-'}\nMotif : ${subject}\n\n${message}`,
    }),
  })

  if (!res.ok) {
    console.error('[contact] Resend', res.status, await res.text())
    return NextResponse.json({ error: 'server' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
