import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/octofit.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      { username: 'maya-chen', name: 'Maya Chen', email: 'maya@example.com', team: 'Trailblazers', goal: 'Run a 10K' },
      { username: 'jordan-rivera', name: 'Jordan Rivera', email: 'jordan@example.com', team: 'Trailblazers', goal: 'Build strength' },
      { username: 'sam-okafor', name: 'Sam Okafor', email: 'sam@example.com', team: 'Summit Crew', goal: 'Improve mobility' },
    ]);

    await Team.insertMany([
      { name: 'Trailblazers', description: 'A supportive team focused on consistent progress.', members: ['maya-chen', 'jordan-rivera'] },
      { name: 'Summit Crew', description: 'Outdoor athletes training for their next challenge.', members: ['sam-okafor'] },
    ]);

    await Activity.insertMany([
      { user: 'maya-chen', type: 'Run', duration: 35, points: 70, date: new Date('2026-08-18T07:30:00Z') },
      { user: 'jordan-rivera', type: 'Strength', duration: 45, points: 90, date: new Date('2026-08-19T17:00:00Z') },
      { user: 'sam-okafor', type: 'Yoga', duration: 30, points: 60, date: new Date('2026-08-20T06:45:00Z') },
    ]);

    await Leaderboard.insertMany([
      { username: 'jordan-rivera', team: 'Trailblazers', points: 420, rank: 1 },
      { username: 'maya-chen', team: 'Trailblazers', points: 390, rank: 2 },
      { username: 'sam-okafor', team: 'Summit Crew', points: 350, rank: 3 },
    ]);

    await Workout.insertMany([
      { name: 'Steady 5K Builder', type: 'Running', description: 'A progressive run with an easy warm-up and cooldown.', duration: 35, difficulty: 'Beginner' },
      { name: 'Full Body Fundamentals', type: 'Strength', description: 'A balanced circuit covering push, pull, squat, and core movements.', duration: 40, difficulty: 'Intermediate' },
      { name: 'Desk Reset Flow', type: 'Mobility', description: 'Gentle mobility work for hips, shoulders, and spine.', duration: 20, difficulty: 'Beginner' },
    ]);

    console.log('Seeded users, teams, activities, leaderboard, and workouts');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
