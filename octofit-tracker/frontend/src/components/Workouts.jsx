import CollectionView from './CollectionView.jsx';

export default function Workouts() {
  return <CollectionView resource="workouts" title="Workouts" emptyMessage="No workouts are available yet." columns={[
    { key: 'name', label: 'Workout' }, { key: 'type', label: 'Type' },
    { key: 'difficulty', label: 'Level' }, { key: 'duration', label: 'Duration', format: (value) => `${value} min` },
  ]} />;
}