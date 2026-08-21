import CollectionView from './CollectionView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

export default function Activities() {
  return <CollectionView resource="activities" endpoint={endpoint} title="Activity log" emptyMessage="No activities logged yet." columns={[
    { key: 'user', label: 'Athlete' }, { key: 'type', label: 'Activity' },
    { key: 'duration', label: 'Duration', format: (value) => `${value} min` }, { key: 'points', label: 'Points' },
    { key: 'date', label: 'Date', format: (value) => new Date(value).toLocaleDateString() },
  ]} />;
}