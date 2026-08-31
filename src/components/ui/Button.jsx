import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ' +
  'disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700',
  secondary: 'bg-white text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
}

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

/**
 * Polymorphic button.
 * - `to`   -> renders a router <Link>
 * - `href` -> renders an <a>
 * - otherwise a native <button>
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
