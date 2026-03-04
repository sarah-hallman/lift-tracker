export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  muscleGroups: string[];
}

export interface Workout {
  id: string;
  userId: string;
  name: string;
  date: Date;
  duration?: number; // in minutes
  notes?: string;
  sets: Set[];
}

export interface Set {
  id: string;
  workoutId: string;
  exerciseId: string;
  reps: number;
  weight: number;
  restTime?: number; // in seconds
  notes?: string;
  order: number;
}

export enum ExerciseCategory {
  CHEST = 'CHEST',
  BACK = 'BACK',
  LEGS = 'LEGS',
  SHOULDERS = 'SHOULDERS',
  ARMS = 'ARMS',
  CORE = 'CORE',
  CARDIO = 'CARDIO'
}

export interface WorkoutStats {
  totalWorkouts: number;
  totalSets: number;
  totalVolume: number; // weight * reps
  averageWorkoutDuration: number;
}