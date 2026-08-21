const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api';

export const apiUrl = (resource) => `${apiBaseUrl}/${resource}/`;

export async function fetchCollection(resource) {
  const response = await fetch(apiUrl(resource));
  if (!response.ok) throw new Error(`Unable to load ${resource} (${response.status})`);
  const payload = await response.json();
  const collection = payload?.data || payload;
  if (Array.isArray(collection)) return collection;
  if (Array.isArray(collection.items)) return collection.items;
  if (Array.isArray(collection.results)) return collection.results;
  return [];
}

export const apiHost = apiBaseUrl.replace(/\/api$/, '');