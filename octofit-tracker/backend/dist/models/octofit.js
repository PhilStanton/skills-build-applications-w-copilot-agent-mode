import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    team: { type: String, required: true },
    goal: { type: String, required: true },
});
const teamSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    members: { type: [String], required: true },
});
const activitySchema = new Schema({
    user: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true, min: 1 },
    points: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true },
});
const leaderboardSchema = new Schema({
    username: { type: String, required: true, unique: true },
    team: { type: String, required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
});
const workoutSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true, min: 1 },
    difficulty: { type: String, required: true },
});
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema);
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
