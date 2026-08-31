import { useEffect, useState } from 'react'
import coursesDatas from '../data/courses.json'

/**
 * Simulates fetching courses from an API: async resolution plus
 * loading / error / success states the UI can render against.
 */
export function useCourses() {
  const [state, setState] = useState({ status: 'loading', courses: [], error: null })

  useEffect(() => {
    let active = true

    const timer = setTimeout(() => {
      if (!active) return
      try {
        setState({ status: 'success', courses: coursesDatas, error: null })
      } catch {
        setState({
          status: 'error',
          courses: [],
          error: 'Unable to load courses. Please try again.',
        })
      }
    }, 700)

    return () => {
      active = false
      clearTimeout(timer)
    }
  }, [])

  return state
}
