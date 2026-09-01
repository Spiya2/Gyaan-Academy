import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { useAuth } from '../../hooks/useAuth.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
]

function linkClass({ isActive }) {
  return `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-brand-50 text-brand-700'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    setOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container as="nav" className="flex h-16 items-center justify-between" aria-label="Main">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-slate-900">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-white">
            GA
          </span>
          Gyaan-Academy
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-slate-600">
                Hi, <span className="font-medium text-slate-900">{user.name}</span>
              </span>
              <Button size="sm" variant="secondary" onClick={handleLogout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" variant="ghost" to="/login">
                Log in
              </Button>
              <Button size="sm" to="/register">
                Sign up
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-3">
              {isAuthenticated ? (
                <Button variant="secondary" onClick={handleLogout}>
                  Log out ({user.name})
                </Button>
              ) : (
                <>
                  <Button variant="secondary" to="/login" onClick={() => setOpen(false)}>
                    Log in
                  </Button>
                  <Button to="/register" onClick={() => setOpen(false)}>
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
