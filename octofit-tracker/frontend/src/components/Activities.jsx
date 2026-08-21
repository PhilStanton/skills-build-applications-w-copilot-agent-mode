import CollectionView from './CollectionView.jsx';

export default function Activities() {
  return <CollectionView resource="activities" title="Activity log" emptyMessage="No activities logged yet." columns={[
    { key: 'user', label: 'Athlete' }, { key: 'type', label: 'Activity' },
    { key: 'duration', label: 'Duration', format: (value) => `${value} min` }, { key: 'points', label: 'Points' },
    { key: 'date', label: 'Date', format: (value) => new Date(value).toLocaleDateString() },
  ]} />;
}