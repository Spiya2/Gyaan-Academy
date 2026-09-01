import { Link } from 'react-router-dom'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import Spinner from '../components/ui/Spinner.jsx'
import Alert from '../components/ui/Alert.jsx'
import CourseCard from '../components/courses/CourseCard.jsx'
import { useCourses } from '../hooks/useCourses.js'
import { useAuth } from '../hooks/useAuth.js'

const features = [
  {
    title: 'Curated learning paths',
    body: 'Structured tracks that take you from fundamentals to job-ready projects.',
  },
  {
    title: 'Learn by building',
    body: 'Every course ships with hands-on exercises and a portfolio-worthy result.',
  },
  {
    title: 'Progress you can see',
    body: 'Track completion, streaks and skills across everything you enrol in.',
  },
]

const stats = [
  { label: 'Courses', value: '120+' },
  { label: 'Active learners', value: '38k' },
  { label: 'Average rating', value: '4.7 / 5' },
]

export default function Home() {
  const { status, courses, error } = useCourses()
  const { isAuthenticated, user } = useAuth()
  const featured = courses.slice(0, 3)

  console.log(featured,'courses');

  return (
    <>
      <section   style={{
    backgroundImage:
      "url('https://img-c.udemycdn.com/notices/home_carousel_slide/image/fa8360c0-cda9-4018-b112-bb82a3c96d31.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "100%",
  }} className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-slate-50">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100">
              Accessible Featured Courses
            </p>
            <h1 className="text-4xl text-white font-bold tracking-tight text-slate-900 sm:text-5xl">
              {isAuthenticated
                ? `Welcome back, ${user.name}.`
                : 'Build real skills, one project at a time.'}
            </h1>
            <p className="mt-4 text-white  max-w-lg text-lg text-slate-600">
              GyaanAcademy is a hands-on platform for web, design and data. Discover courses, track your
              enrolments and visualise your progress.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" to="/courses">
                Browse courses
              </Button>
              {!isAuthenticated && (
                <Button size="lg" variant="secondary" to="/register">
                  Create free account
                </Button>
              )}
            </div>
            <dl className="mt-10 flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm text-slate-500 text-white">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-slate-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* <Card className="p-6">
            <p className="text-sm font-semibold text-slate-900">This week on GyaanAcademy</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span aria-hidden="true">📈</span> 4 new lessons in Data Visualisation with D3
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">🧩</span> Refreshed exercises in React Foundations
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">🎓</span> 1,200 learners earned a certificate
              </li>
            </ul>
          </Card> */}
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">Why GyaanAcademy</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Featured courses</h2>
            <Link to="/courses" className="text-sm font-medium text-brand-700 hover:underline">
              View all
            </Link>
          </div>

          <div className="mt-8">
            {status === 'loading' && <Spinner label="Loading featured courses…" />}
            {status === 'error' && <Alert tone="error">{error}</Alert>}
            {status === 'success' && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
