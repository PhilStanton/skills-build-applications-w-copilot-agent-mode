import express from 'express';
import './config/database.js';
import { Activity, Leaderboard, Team, User, Workout } from './models/octofit.js';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api', baseUrl });
});

const addCollectionRoute = (path: string, model: typeof User) => {
  app.get(path, async (_request, response) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      console.error(`Unable to load ${path}:`, error);
      response.status(503).json({ error: 'Data service unavailable' });
    }
  });
};

addCollectionRoute('/api/users/', User);
addCollectionRoute('/api/teams/', Team);
addCollectionRoute('/api/activities/', Activity);
addCollectionRoute('/api/leaderboard/', Leaderboard);
addCollectionRoute('/api/workouts/', Workout);

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening at ${baseUrl}`);
});
