import CollectionView from './CollectionView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

export default function Users() {
  return <CollectionView resource="users" endpoint={endpoint} title="Athletes" emptyMessage="No athletes have joined yet." columns={[
    { key: 'name', label: 'Name' }, { key: 'username', label: 'Username' },
    { key: 'team', label: 'Team' }, { key: 'goal', label: 'Current goal' },
  ]} />;
}