import { useMemo, useState } from 'react'
import Container from '../components/ui/Container.jsx'
import Card from '../components/ui/Card.jsx'
import Spinner from '../components/ui/Spinner.jsx'
import Alert from '../components/ui/Alert.jsx'
import CourseCard from '../components/courses/CourseCard.jsx'
import { useCourses } from '../hooks/useCourses.js'

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced']
const SORTS = {
  popular: 'Most popular',
  rating: 'Highest rated',
  shortest: 'Shortest first',
}

export default function Courses() {
  const { status, courses, error } = useCourses()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [level, setLevel] = useState('All')
  const [sort, setSort] = useState('popular')

  const categories = useMemo(
    () => ['All', ...new Set(courses.map((course) => course.category))],
    [courses],
  )

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase()
    const filtered = courses.filter((course) => {
      const matchesQuery =
        !term ||
        course.title.toLowerCase().includes(term) ||
        course.summary.toLowerCase().includes(term) ||
        course.tags.some((tag) => tag.includes(term))
      const matchesCategory = category === 'All' || course.category === category
      const matchesLevel = level === 'All' || course.level === level
      return matchesQuery && matchesCategory && matchesLevel
    })

    const sorted = [...filtered]
    if (sort === 'popular') sorted.sort((a, b) => b.students - a.students)
    if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating)
    if (sort === 'shortest') sorted.sort((a, b) => a.durationHours - b.durationHours)
    return sorted
  }, [courses, query, category, level, sort])

  const selectClass =
    'h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100'

  return (
    <Container className="py-12">
      <header className="max-w-2xl hidden">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Course catalogue</h1>
        <p className="mt-2 text-slate-600">
          Search and filter {status === 'success' ? courses.length : ''} courses across web
          development, design and data.
        </p>
      </header>

      <Card className="mt-8 p-4 hidden">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto_auto]">
          <div>
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, topic or tag…"
              className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div>
            <label htmlFor="filter-category" className="sr-only">
              Filter by category
            </label>
            <select
              id="filter-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className={selectClass}
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option === 'All' ? 'All categories' : option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-level" className="sr-only">
              Filter by level
            </label>
            <select
              id="filter-level"
              value={level}
              onChange={(event) => setLevel(event.target.value)}
              className={selectClass}
            >
              {LEVELS.map((option) => (
                <option key={option} value={option}>
                  {option === 'All' ? 'All levels' : option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="sort-by" className="sr-only">
              Sort courses
            </label>
            <select
              id="sort-by"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className={selectClass}
            >
              {Object.entries(SORTS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      <div className="mt-8">
        {status === 'loading' && <Spinner label="Loading courses…" />}
        {status === 'error' && <Alert tone="error">{error}</Alert>}
        {status === 'success' && (
          <>
            <p className="mb-4 text-sm text-slate-500" aria-live="polite">
              Showing {visible.length} of {courses.length} courses
            </p>
            {visible.length === 0 ? (
              <Alert tone="info" title="No courses match your filters">
                Try clearing the search box or choosing a different category.
              </Alert>
            ) : (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((course) => (
                  <li key={course.id}>
                    <CourseCard course={course} />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </Container>
  )
}
