import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Track Your Fitness Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Simple, powerful workout tracking. Log your lifts, monitor progress, and achieve your fitness goals.
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Get Started
          </Link>
          <Link href="/workouts" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition">
            View Workouts
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your strength gains and workout consistency over time</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-4">⏱️</div>
            <h3 className="text-lg font-semibold mb-2">Log Workouts</h3>
            <p className="text-gray-600">Quickly record sets, reps, and weights for all your exercises</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Set Goals</h3>
            <p className="text-gray-600">Define targets and track your journey to achieving them</p>
          </div>
        </div>
      </div>
    </div>
  )
}