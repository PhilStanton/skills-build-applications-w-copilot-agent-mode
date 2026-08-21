import CollectionView from './CollectionView.jsx';

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

export default function Leaderboard() {
  return <CollectionView resource="leaderboard" endpoint={endpoint} title="Leaderboard" emptyMessage="The leaderboard is waiting for its first result." columns={[
    { key: 'rank', label: 'Rank', format: (value) => `#${value}` }, { key: 'username', label: 'Athlete' },
    { key: 'team', label: 'Team' }, { key: 'points', label: 'Points' },
  ]} />;
}