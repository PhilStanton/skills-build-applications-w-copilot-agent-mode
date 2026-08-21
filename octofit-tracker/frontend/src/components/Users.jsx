import CollectionView from './CollectionView.jsx';

export default function Users() {
  return <CollectionView resource="users" title="Athletes" emptyMessage="No athletes have joined yet." columns={[
    { key: 'name', label: 'Name' }, { key: 'username', label: 'Username' },
    { key: 'team', label: 'Team' }, { key: 'goal', label: 'Current goal' },
  ]} />;
}