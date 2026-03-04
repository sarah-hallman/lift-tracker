import { Workout } from '@/types'

// Mock data - replace with actual data fetching
const mockWorkouts: Partial<Workout>[] = [
  {
    id: '1',
    name: 'Push Day',
    date: new Date('2024-01-15'),
    duration: 75
  },
  {
    id: '2', 
    name: 'Pull Day',
    date: new Date('2024-01-13'),
    duration: 68
  },
  {
    id: '3',
    name: 'Leg Day',
    date: new Date('2024-01-11'), 
    duration: 82
  }
]

export function RecentWorkouts() {
  return (
    <div className="space-y-3">
      {mockWorkouts.map((workout) => (
        <div key={workout.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium text-gray-900">{workout.name}</h3>
            <p className="text-sm text-gray-600">
              {workout.date?.toLocaleDateString()} • {workout.duration} min
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            View
          </button>
        </div>
      ))}
      
      {mockWorkouts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No recent workouts found.</p>
          <button className="text-blue-600 hover:text-blue-800 font-medium mt-2">
            Start your first workout
          </button>
        </div>
      )}
    </div>
  )
}