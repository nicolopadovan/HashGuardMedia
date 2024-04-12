import { db } from '@vercel/postgres'

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
    })
  }

  let body
  try {
    body = await request.json()
  } catch (error) {
    return new Response('Invalid JSON', {
      status: 400,
    })
  }

  const { first_name, last_name, email, opt_in } = body

  if (!email) {
    return new Response('Email is required.', {
      status: 400,
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return new Response('Please enter a valid email address.', {
      status: 400,
    })
  }

  try {
    const client = await db.connect()

    await client.sql`
      INSERT INTO leads (first_name, last_name, email, opt_in)
      VALUES (${first_name}, ${last_name}, ${email}, ${opt_in})
      ON CONFLICT (email) DO UPDATE SET
        first_name = COALESCE(EXCLUDED.first_name, leads.first_name),
        last_name = COALESCE(EXCLUDED.last_name, leads.last_name),
        opt_in = COALESCE(EXCLUDED.opt_in, leads.opt_in);
    `

    return new Response('OK', {
      status: 200,
    })
  } catch (error) {
    return new Response(`An error occurred. Please try again.\n${error}`, {
      status: 500,
    })
  }
}
