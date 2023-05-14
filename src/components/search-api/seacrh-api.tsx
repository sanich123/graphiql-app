import { changeDataQuery, changeDataMutation, changeDataSchema } from '@/redux/api-data/api-data';
import { RootState } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './search-api.module.scss';

export default function SearchApi() {
  
  const urlInput = React.useRef(null);
  const dispatch = useDispatch();
  const text = useSelector((state: RootState) => state.apiData.urlData);

  const queryQuery = `{
    __schema {
      queryType {
        fields {
          name
          description
        }
      }
    }
  }
  `;

  const queryMutation = `{
    __schema {
      mutationType {
        fields {
          name
        }
      }
    }
  }
  `;

  const queryDoc = `fragment FullType on __Type {
    kind
    name
    fields(includeDeprecated: true) {
      name
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  fragment InputValue on __InputValue {
    name
    type {
      ...TypeRef
    }
    defaultValue
  }
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  query IntrospectionQuery {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      types {
        ...FullType
      }
      directives {
        name
        locations
        args {
          ...InputValue
        }
      }
    }
  }
  `;

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
      console.log(error);
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
      dispatch(changeDataMutation(JSON.stringify(res)));
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
    makeRequest1(url.value, queryQuery);
    makeRequest2(url.value, queryMutation);
    makeRequest3(url.value, queryDoc);
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
