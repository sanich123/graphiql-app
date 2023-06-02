import { toast } from 'react-toastify';

export async function getSchema(endpoint: string, query: string) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    return await response.json();
  } catch {
    toast.warn('Не удалось получить схему');
  }
}
