import { useEffect, useState } from 'react';
import { fetchCollection } from '../api.js';

export default function CollectionView({ resource, title, columns, emptyMessage }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    fetchCollection(resource)
      .then((data) => active && setItems(data))
      .catch((requestError) => active && setError(requestError.message));
    return () => { active = false; };
  }, [resource]);

  return (
    <section className="content-section">
      <div className="section-heading">
        <div><p className="eyebrow">Live collection</p><h1>{title}</h1></div>
        <span className="record-count">{items.length} records</span>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {!error && items.length === 0 && <div className="empty-state">{emptyMessage}</div>}
      {items.length > 0 && <div className="table-responsive data-table-wrap">
        <table className="table data-table align-middle mb-0">
          <thead><tr>{columns.map(({ key, label }) => <th key={key}>{label}</th>)}</tr></thead>
          <tbody>{items.map((item, index) => <tr key={item._id || `${resource}-${index}`}>
            {columns.map(({ key, format }) => <td key={key}>{format ? format(item[key], item) : item[key] || '—'}</td>)}
          </tr>)}</tbody>
        </table>
      </div>}
    </section>
  );
}