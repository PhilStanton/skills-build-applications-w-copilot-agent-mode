import CollectionView from './CollectionView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

export default function Workouts() {
  return <CollectionView resource="workouts" endpoint={endpoint} title="Workouts" emptyMessage="No workouts are available yet." columns={[
    { key: 'name', label: 'Workout' }, { key: 'type', label: 'Type' },
    { key: 'difficulty', label: 'Level' }, { key: 'duration', label: 'Duration', format: (value) => `${value} min` },
  ]} />;
}