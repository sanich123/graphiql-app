import { changeDataQuery, changeDataMutation, changeDataSchema } from '@/redux/api-data/api-data';
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './search-api.module.scss';
import { queryQuery, queryMutation, queryDoc } from './query-param';

export default function SearchApi() {
  const urlInput = React.useRef(null);
  const dispatch = useDispatch();

  async function makeRequest1(endpoint: string, query: string) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const res = await response.json();
      dispatch(changeDataQuery(JSON.stringify(res)));
      console.log(res);
    } catch (error) {
      dispatch(changeDataQuery(''));
    }
  }

  async function makeRequest2(endpoint: string, query: string) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const res = await response.json();
      const data = await JSON.stringify(res);
      dispatch(changeDataMutation(data));
      console.log(res);
    } catch {
      dispatch(changeDataMutation(''));
    }
  }

  async function makeRequest3(endpoint: string, query: string) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const res = await response.json();
      dispatch(changeDataSchema(JSON.stringify(res)));
      console.log(res);
    } catch {
      dispatch(changeDataSchema(''));
    }
  }

  async function changeUrl(event: React.SyntheticEvent) {
    event.preventDefault();
    const url = await urlInput.current;
    await makeRequest1(url.value, queryQuery);
    await makeRequest2(url.value, queryMutation);
    await makeRequest3(url.value, queryDoc);
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
