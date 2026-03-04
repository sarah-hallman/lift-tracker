# Lift Tracker

A modern SaaS application for tracking your weightlifting progress and exercise routines. Built with Next.js 14, this application provides an intuitive dashboard to monitor your fitness journey, log workouts, and visualize your strength gains over time.

## 🏋️ Description

Lift Tracker is designed for fitness enthusiasts who want to systematically track their weightlifting sessions and monitor their progress. The application features a clean, responsive interface that makes it easy to log exercises, view workout history, and analyze performance metrics.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Configuration**: PostCSS for CSS processing
- **Development**: Hot reload and TypeScript strict mode

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lift-tracker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Edit `.env.local` with your configuration values.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
lift-tracker/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard with workout stats and overview
│   │   ├── workouts/
│   │   │   └── page.tsx          # Workout logging and history page
│   │   ├── layout.tsx            # Root layout with navigation
│   │   ├── page.tsx              # Landing/home page
│   │   └── globals.css           # Global styles and Tailwind imports
│   ├── components/
│   │   ├── StatsCard.tsx         # Reusable statistics display component
│   │   └── RecentWorkouts.tsx    # Recent workout sessions component
│   └── types/
│       └── index.ts              # TypeScript type definitions
├── .env.local.example            # Environment variables template
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration for Tailwind
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

### Key Components

- **Dashboard (`/dashboard`)**: Central hub displaying workout statistics, progress charts, and recent activity
- **Workouts (`/workouts`)**: Interface for logging new workouts and viewing exercise history
- **StatsCard**: Displays key metrics like total workouts, personal records, and weekly progress
- **RecentWorkouts**: Shows the most recent workout sessions with quick details

## 🔧 Configuration

The application uses several configuration files:

- `next.config.js`: Next.js framework configuration
- `tsconfig.json`: TypeScript compiler options with strict mode enabled
- `tailwind.config.ts`: Tailwind CSS customization and theme configuration
- `postcss.config.js`: PostCSS plugins including Tailwind CSS processing

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for the lifting community