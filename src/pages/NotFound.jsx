import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <p className="text-6xl font-bold text-brand-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 max-w-sm text-slate-600">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Button className="mt-8" to="/">
        Back to home
      </Button>
    </Container>
  )
}
