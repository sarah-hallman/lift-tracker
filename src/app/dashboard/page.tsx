import { WorkoutStats } from '@/types'
import { StatsCard } from '@/components/StatsCard'
import { RecentWorkouts } from '@/components/RecentWorkouts'

// Mock data - replace with actual data fetching
const mockStats: WorkoutStats = {
  totalWorkouts: 47,
  totalSets: 423,
  totalVolume: 12580,
  averageWorkoutDuration: 68
}

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Track your fitness progress and recent activity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Total Workouts" 
          value={mockStats.totalWorkouts.toString()} 
          icon="🏋️" 
        />
        <StatsCard 
          title="Total Sets" 
          value={mockStats.totalSets.toString()} 
          icon="📈" 
        />
        <StatsCard 
          title="Total Volume" 
          value={`${mockStats.totalVolume.toLocaleString()} lbs`} 
          icon="💪" 
        />
        <StatsCard 
          title="Avg Duration" 
          value={`${mockStats.averageWorkoutDuration} min`} 
          icon="⏱️" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Workouts</h2>
          <RecentWorkouts />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition">
              Start New Workout
            </button>
            <button className="w-full bg-gray-100 text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-200 transition">
              View All Exercises
            </button>
            <button className="w-full bg-gray-100 text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-200 transition">
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}