import Card from '../ui/Card.jsx'

const levelTone = {
  Beginner: 'bg-emerald-50 text-emerald-700',
  Intermediate: 'bg-amber-50 text-amber-700',
  Advanced: 'bg-rose-50 text-rose-700',
}

export default function CourseCard({ course }) {
  return (
    <Card as="article" className="flex h-full flex-col p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-600">
          {course.category}
        </span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${levelTone[course.level]}`}>
          {course.level}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-slate-900">{course.title}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-600">{course.summary}</p>

      <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
        <div className="flex gap-1">
          <dt className="sr-only">Instructor</dt>
          <dd>{course.instructor}</dd>
        </div>
        <div className="flex gap-1">
          <dt>Duration:</dt>
          <dd>{course.durationHours}h</dd>
        </div>
        <div className="flex gap-1">
          <dt>Rating:</dt>
          <dd aria-label={`${course.rating} out of 5`}>★ {course.rating}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="sr-only">Enrolled students</dt>
          <dd>{course.students.toLocaleString()} students</dd>
        </div>
      </dl>
    </Card>
  )
}
