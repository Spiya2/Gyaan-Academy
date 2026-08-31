import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} LearnHub. Built for ICT930.</p>
        <nav className="flex gap-4" aria-label="Footer">
          <Link to="/courses" className="hover:text-slate-900">
            Courses
          </Link>
          <Link to="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link to="/login" className="hover:text-slate-900">
            Log in
          </Link>
        </nav>
      </Container>
    </footer>
  )
}
