'use client'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { useCallback, useState } from 'react'
import { usePopup } from './PopUp/PopupContext'

interface FormState {
  firstName: string
  lastName: string
  email: string
  optIn: boolean
}

export default function SignUpForm() {
  const { openPopup } = usePopup()

  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    optIn: false,
  })

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!formState.firstName || !formState.lastName || !formState.email) {
        alert('Please fill out all fields.')
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formState.email)) {
        alert('Please enter a valid email address.')
        return
      }

      const body = {
        first_name: formState.firstName,
        last_name: formState.lastName,
        email: formState.email,
        opt_in: formState.optIn,
      }

      try {
        setIsLoading(true)
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })

        setIsLoading(false)

        if (response.ok) {
          openPopup({
            title: 'Success',
            description: 'You have successfully signed up for our newsletter.',
            cancelBtnText: 'Close',
          })
        } else {
          console.log('response', response)

          if (response.status === 409) {
            openPopup({
              title: 'Error',
              description: 'You have already signed up for our newsletter.',
              cancelBtnText: 'Close',
            })
          } else {
            openPopup({
              title: 'Error',
              description: 'An internal error occurred. Please try again.',
              cancelBtnText: 'Close',
            })
          }
        }
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        openPopup({
          title: 'Error',
          description: 'An internal error occurred. Please try again.',
          cancelBtnText: 'Close',
        })
      }
    },
    [formState],
  )

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
    >
      <TextField
        label="First name"
        name="first_name"
        type="text"
        autoComplete="given-name"
        required
        onChange={(event) =>
          setFormState((prev) => ({
            ...prev,
            firstName: event.target.value,
          }))
        }
        value={formState.firstName}
      />
      <TextField
        label="Last name"
        name="last_name"
        type="text"
        autoComplete="family-name"
        required
        onChange={(event) =>
          setFormState((prev) => ({
            ...prev,
            lastName: event.target.value,
          }))
        }
        value={formState.lastName}
      />
      <TextField
        className="col-span-full"
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
        onChange={(event) =>
          setFormState((prev) => ({ ...prev, email: event.target.value }))
        }
        value={formState.email}
      />

      <div className="relative col-span-full flex items-start">
        <div className="flex h-6 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
            checked={formState.optIn}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                optIn: event.target.checked,
              }))
            }
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor="comments">
            <span className="font-medium text-gray-900">I agree </span>
            <span id="comments-description" className="text-gray-500">
              <span className="sr-only">I agree </span>
              to receive communications from HashGuard Media so I can stay
              informed about news and updates.
            </span>
          </label>
        </div>
      </div>

      <div className="col-span-full">
        <Button
          type="submit"
          variant="solid"
          color="blue"
          className="h-10 w-full"
        >
          <span>
            {isLoading ? (
              <div
                role="status"
                className="flex items-center justify-center p-2"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin fill-blue-600 text-gray-200"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <>
                Sign up <span aria-hidden="true">&rarr;</span>
              </>
            )}
          </span>
        </Button>

        <p className="mt-3 text-sm text-gray-700">
          We promise to keep your inbox free of clutter, focusing only on
          meaningful updates and exciting milestones.
        </p>
      </div>
    </form>
  )
}
