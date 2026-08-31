import { useId } from 'react'

/** Labelled text field with inline error messaging and a11y wiring. */
export default function Input({ label, error, hint, type = 'text', className = '', ...props }) {
  const id = useId()
  const errorId = `${id}-error`
  const hintId = `${id}-hint`

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={
          [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ') || undefined
        }
        className={`h-11 w-full rounded-lg border bg-white px-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-2 ${
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
            : 'border-slate-300 focus:border-brand-500 focus:ring-brand-100'
        }`}
        {...props}
      />
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-slate-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
