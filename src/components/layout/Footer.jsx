import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
      <Container className="py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-slate-900">Gyaan Academy</h3>
            <p className="text-sm text-slate-600">
              Empowering learners to master new skills and advance their careers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-slate-900">Platform</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/courses" className="text-sm text-slate-600 hover:text-blue-600 transition">
                Explore Courses
              </Link>
              <Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 transition">
                About Us
              </Link>
              <a href="#contact" className="text-sm text-slate-600 hover:text-blue-600 transition">
                Contact
              </a>
            </nav>
          </div>

          {/* Learning Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-slate-900">Resources</h4>
            <nav className="flex flex-col gap-2">
              <a href="#faq" className="text-sm text-slate-600 hover:text-blue-600 transition">
                FAQ
              </a>
              <a href="#help" className="text-sm text-slate-600 hover:text-blue-600 transition">
                Help Center
              </a>
              <a href="#blog" className="text-sm text-slate-600 hover:text-blue-600 transition">
                Blog
              </a>
            </nav>
          </div>

          {/* Legal & Social */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-slate-900">Legal</h4>
            <nav className="flex flex-col gap-2">
              <a href="#privacy" className="text-sm text-slate-600 hover:text-blue-600 transition">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-slate-600 hover:text-blue-600 transition">
                Terms of Service
              </a>
              <a href="#cookies" className="text-sm text-slate-600 hover:text-blue-600 transition">
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-200"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Gyaan Academy. All rights reserved. • Built for ICT930 Advanced Web Development
          </p>
          <div className="flex gap-4">
            <a href="#twitter" aria-label="Twitter" className="text-slate-500 hover:text-blue-600 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-15-9.4 10.66 10.66 0 0013.78 1.51" />
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="text-slate-500 hover:text-blue-600 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#github" aria-label="GitHub" className="text-slate-500 hover:text-blue-600 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.91 1.182.092-.92.35-1.547.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}