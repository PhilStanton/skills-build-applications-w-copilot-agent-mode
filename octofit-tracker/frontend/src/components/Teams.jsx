import CollectionView from './CollectionView.jsx';

export default function Teams() {
  return <CollectionView resource="teams" title="Teams" emptyMessage="Create a team to start competing together." columns={[
    { key: 'name', label: 'Team' }, { key: 'description', label: 'Mission' },
    { key: 'members', label: 'Members', format: (value) => value?.length || 0 },
  ]} />;
}