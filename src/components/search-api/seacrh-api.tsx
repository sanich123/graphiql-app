import { useRef } from 'react';
import { changeDataSchema } from '@/redux/api-data/api-data';
import { useDispatch } from 'react-redux';
import styles from './search-api.module.scss';
import { queryDoc } from './query-param';

export default function SearchApi() {
  const urlInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  async function getSchema(endpoint: string, query: string) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const res = await response.json();
      dispatch(changeDataSchema(JSON.stringify(res)));
    } catch {
      dispatch(changeDataSchema(''));
    }
  }

  async function changeUrl(event: React.SyntheticEvent) {
    event.preventDefault();
    if (urlInput.current instanceof HTMLInputElement) {
      const url = urlInput.current;
      await getSchema(url.value, queryDoc);
    }
  }

  return (
    <div className={styles.allSearchApi}>
      <form className={styles.formApi}>
        <button onClick={changeUrl}>Check</button>
        <input className={styles.inputApi} type="text" ref={urlInput} />
      </form>
    </div>
  );
}
