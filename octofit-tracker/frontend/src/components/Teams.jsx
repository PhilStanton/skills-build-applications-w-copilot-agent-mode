import CollectionView from './CollectionView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

export default function Teams() {
  return <CollectionView resource="teams" endpoint={endpoint} title="Teams" emptyMessage="Create a team to start competing together." columns={[
    { key: 'name', label: 'Team' }, { key: 'description', label: 'Mission' },
    { key: 'members', label: 'Members', format: (value) => value?.length || 0 },
  ]} />;
}