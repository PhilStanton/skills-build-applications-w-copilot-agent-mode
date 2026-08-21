import CollectionView from './CollectionView.jsx';

export default function Leaderboard() {
  return <CollectionView resource="leaderboard" title="Leaderboard" emptyMessage="The leaderboard is waiting for its first result." columns={[
    { key: 'rank', label: 'Rank', format: (value) => `#${value}` }, { key: 'username', label: 'Athlete' },
    { key: 'team', label: 'Team' }, { key: 'points', label: 'Points' },
  ]} />;
}