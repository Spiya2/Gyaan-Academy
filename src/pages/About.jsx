import Container from '../components/ui/Container.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'

const values = [
  {
    title: 'Practitioner-led',
    body: 'Courses are written and maintained by people who ship software for a living.',
  },
  {
    title: 'Accessible by default',
    body: 'We design for keyboards, screen readers and low bandwidth from the first draft.',
  },
  {
    title: 'Open about outcomes',
    body: 'Ratings, completion rates and reviews are visible on every course page.',
  },
]

const team = [
  { name: 'Dana Mitchell', role: 'Head of Curriculum' },
  { name: 'Priya Raman', role: 'Lead Design Instructor' },
  { name: 'Marco Silva', role: 'Engineering Mentor' },
]

export default function About() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="max-w-3xl py-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">About GyaanAcademy</h1>
          <p className="mt-4 text-lg text-slate-600">
            GyaanAcademy started as an internal training project and grew into a public platform for
            hands-on technology education. Our goal is simple: help people learn skills they can use
            at work the same week.
          </p>
          <p className="mt-4 text-slate-600">
            This particular build is a frontend reference implementation created for the ICT930
            Advanced Web Application Development unit. It focuses on component architecture, state
            management, routing and accessible, responsive UI.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">What we value</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="p-6">
                <h3 className="font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">The team</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member) => (
              <li key={member.name}>
                <Card className="flex items-center gap-4 p-5">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-100 font-semibold text-brand-700"
                    aria-hidden="true"
                  >
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{member.name}</p>
                    <p className="text-sm text-slate-500">{member.role}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <Card className="flex flex-col items-start justify-between gap-4 bg-brand-600 p-8 text-white sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Ready to start learning?</h2>
              <p className="mt-1 text-brand-50">
                Create a free account and enrol in your first course today.
              </p>
            </div>
            <Button variant="secondary" to="/register">
              Get started
            </Button>
          </Card>
        </Container>
      </section>
    </>
  )
}
