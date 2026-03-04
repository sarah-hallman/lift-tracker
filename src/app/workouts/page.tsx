import Link from 'next/link'
import { Workout } from '@/types'

// Mock data - replace with actual data fetching
const mockWorkouts: Workout[] = [
  {
    id: '1',
    userId: 'user1',
    name: 'Push Day',
    date: new Date('2024-01-15'),
    duration: 75,
    sets: [],
    notes: 'Great session, increased bench press'
  },
  {
    id: '2',
    userId: 'user1', 
    name: 'Pull Day',
    date: new Date('2024-01-13'),
    duration: 68,
    sets: []
  },
  {
    id: '3',
    userId: 'user1',
    name: 'Leg Day',
    date: new Date('2024-01-11'),
    duration: 82,
    sets: [],
    notes: 'Focused on squats and deadlifts'
  }
]

export default function WorkoutsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Workouts</h1>
          <p className="text-gray-600">View and manage your workout history</p>
        </div>
        <Link 
          href="/workouts/new"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          New Workout
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Workouts</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {mockWorkouts.map((workout) => (
            <div key={workout.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{workout.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <span>📅 {workout.date.toLocaleDateString()}</span>
                    <span>⏱️ {workout.duration} min</span>
                    <span>💪 {workout.sets.length} sets</span>
                  </div>
                  {workout.notes && (
                    <p className="text-sm text-gray-600 mt-2">{workout.notes}</p>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View
                  </Link>
                  <button className="text-gray-600 hover:text-gray-800 font-medium">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {mockWorkouts.length === 0 && (
          <div className="px-6 py-12 text-center">
            <div className="text-gray-400 text-4xl mb-4">🏋️</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No workouts yet</h3>
            <p className="text-gray-600 mb-4">Start tracking your fitness journey today!</p>
            <Link
              href="/workouts/new"
              className="inline-flex bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Create Your First Workout
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}