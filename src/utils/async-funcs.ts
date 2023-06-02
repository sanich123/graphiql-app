import { toast } from 'react-toastify';

export async function getSchema(endpoint: string, query: string) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    if (response) {
      toast.success('This url is valid for receiving graphql schema!');
    }
    return await response.json();
  } catch {
    toast.warn('It is unable to receive the schema data. Check your address or your internet connection');
  }
}
